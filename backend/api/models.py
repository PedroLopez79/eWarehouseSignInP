from django.db import models
from django.contrib.auth.models import User, UserManager, AbstractBaseUser, PermissionsMixin

# Create your models here.

class Tbluser(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    userid = models.CharField(db_column='UserID', max_length=20, unique=True)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=128)  # Field name made lowercase.
    groupname = models.CharField(db_column='GroupName', max_length=30)  # Field name made lowercase.
    first_name = models.CharField(db_column='FirstName', max_length=50)  # Field name made lowercase.
    last_name = models.CharField(db_column='LastName', max_length=50)  # Field name made lowercase.
    addressline1 = models.CharField(db_column='AddressLine1', max_length=50, blank=True, null=True)  # Field name made lowercase.
    addressline2 = models.CharField(db_column='AddressLine2', max_length=50, blank=True, null=True)  # Field name made lowercase.
    city = models.CharField(db_column='City', max_length=50, blank=True, null=True)  # Field name made lowercase.
    state = models.CharField(db_column='State', max_length=50, blank=True, null=True)  # Field name made lowercase.
    postalcode = models.CharField(db_column='PostalCode', max_length=50, blank=True, null=True)  # Field name made lowercase.
    country = models.CharField(db_column='Country', max_length=50, blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=50, blank=True, null=True)  # Field name made lowercase.
    fax = models.CharField(db_column='Fax', max_length=50, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='EMail', max_length=50, blank=True, null=True)  # Field name made lowercase.
    company = models.CharField(db_column='Company', max_length=50)  # Field name made lowercase.
    is_active = models.BooleanField(db_column='Active', blank=True, null=True)  # Field name made lowercase.
    contactname2 = models.CharField(db_column='ContactName2', max_length=50, blank=True, null=True)  # Field name made lowercase.
    email2 = models.CharField(db_column='EMail2', max_length=50, blank=True, null=True)  # Field name made lowercase.
    alerts = models.BooleanField(db_column='Alerts')  # Field name made lowercase.
    defaultzebra = models.IntegerField(db_column='defaultZebra', blank=True, null=True)  # Field name made lowercase.
    last_login = models.DateTimeField(db_column='LastLoginDate', blank=True, null=True)  # Field name made lowercase.
    branchid = models.IntegerField(db_column='BranchID', blank=True, null=True)  # Field name made lowercase.
    is_superuser = models.BooleanField(db_column='isSupervisor', blank=True, null=True)  # Field name made lowercase.
    isaccountrep = models.BooleanField(db_column='isAccountRep', blank=True, null=True)  # Field name made lowercase.
    sendnotification = models.BooleanField(db_column='SendNotification', blank=True, null=True)  # Field name made lowercase.
    isflex = models.BooleanField(db_column='isFlex', blank=True, null=True)  # Field name made lowercase.
    customizedoptions = models.BooleanField(db_column='CustomizedOptions', blank=True, null=True)  # Field name made lowercase.
    iscustomerrelation = models.BooleanField(db_column='isCustomerRelation', blank=True, null=True)  # Field name made lowercase.
    isfirstloadingrequestassigned = models.BooleanField(db_column='isFirstLoadingRequestAssigned', blank=True, null=True)  # Field name made lowercase.
    supervisorpin = models.CharField(db_column='SupervisorPIN', max_length=200, blank=True, null=True)  # Field name made lowercase.

    USERNAME_FIELD = "userid"
    REQUIRED_FIELDS = ['password']
    objects = UserManager()
    class Meta:
        managed = False
        db_table = 'tblUser'

class Note(models.Model):
    title = models.CharField(db_column='title', max_length=50)
    content = models.CharField(db_column='content', max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    author= models.ForeignKey(Tbluser, on_delete=models.CASCADE, related_name="notes")

    class Meta:
        managed = False
        db_table = 'Note'