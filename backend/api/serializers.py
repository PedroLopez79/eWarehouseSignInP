from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import Note
from .models import Tbluser

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = 'userid'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['userid'] = serializers.CharField()
        self.fields['password'] = serializers.CharField(write_only=True)

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.userid
        return token

    def validate(self, attrs):  # ← no @classmethod, uses self not cls
        userid = attrs.get('userid')
        password = attrs.get('password')

        try:
            user = Tbluser.objects.get(userid=userid)
        except Tbluser.DoesNotExist:
            raise serializers.ValidationError('No user found with this ID.')

        # Direct plain text comparison
        if user.password != password:
            raise serializers.ValidationError('Incorrect password.')

        refresh = self.get_token(user)

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

#class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#    @classmethod
#    def get_token(cls, user):
#        token = super().get_token(user)

        # Add custom claims
#        token['username'] = user.userid
#        token['password'] = user.password
        # ...

#        return token

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tbluser
        fields = ["userid", "password", "email"]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = Tbluser.objects.create(
            userid=validated_data['userid'],
            password=validated_data['password'],
            email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}

class TbluserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tbluser
        fields = ["userid", "password", "email"]
        extra_kwargs = {"UserID": {"read_only": True}}

class TblUserType(serializers.ModelSerializer):
    class Meta:
        model = Tbluser
        fields = ["groupname"]
        extra_kwargs = {"groupname": {"read_only": True}}