from django.conf.urls import url, include, re_path
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
import accounts.urls
from accounts.views import GetProfile

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('get-profile/', GetProfile.as_view(), name='get_profile'),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    path('auth/', include(accounts.urls)),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
