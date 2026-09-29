from django.contrib import admin
from django.urls import path, include
from api.views import MyTokenObtainPairView, RegisterView, GetUserType

from api.views import dsi_types_list
from api.views import dsi_carrier_list

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/user/register/", RegisterView.as_view(), name="register"),
    path("api/token/",  MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),

    path("api/Controls/<str:pk>/", GetUserType.as_view(), name="UserType"),

    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("api.urls")),

    path("api/dsi-types/", dsi_types_list, name='dsi-types-list'),
    path("api/dsi-carrier/", dsi_carrier_list, name='dsi-carrier-list')
]
