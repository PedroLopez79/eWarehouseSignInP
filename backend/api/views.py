from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer, TbluserSerializer, MyTokenObtainPairSerializer, RegisterSerializer, TblUserType
from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Note
from .models import Tbluser

#Login User
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
# Create your views here.
class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)
        
class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user=self.request.user
        return Note.objects.filter(author=user)


#class CreateUserView(generics.CreateAPIView):
#    queryset = User.objects.all()
#    serializer_class= UserSerializer
#    permission_classes = [AllowAny]

class CreateTblUserView(generics.CreateAPIView):
    queryset = Tbluser.objects.all()
    serializer_class = TbluserSerializer
    permission_classes = [AllowAny]

#Register User
class RegisterView(generics.CreateAPIView):
    queryset = Tbluser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

#Get User Type
class GetUserType(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = TblUserType

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Tbluser.objects.filter(userid=pk)

