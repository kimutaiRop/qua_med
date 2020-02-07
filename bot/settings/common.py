import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
from celery.schedules import crontab

SITE_ID = 1

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'allauth',
    'channels',
    'allauth.account',
    'allauth.socialaccount',
    'corsheaders',
    'rest_auth',
    'rest_auth.registration',
    'rest_framework',
    'rest_framework.authtoken',
    'qua',
    'accounts'
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# This is required otherwise it asks for email server

ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = True

ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
ACCOUNT_AUTHENTICATION_METHOD = "email_username"
ACCOUNT_CONFIRM_EMAIL_ON_GET = True
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = "/set-category"

ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = "/set-category"
PASSWORD_REST_REDIRECT_URL = "/login"


AUTHENTICATION_BACKENDS = (
    "allauth.account.auth_backends.AuthenticationBackend",
)

REST_AUTH_SERIALIZERS = {
    'TOKEN_SERIALIZER': 'qua.serializer.TokenSerializer',
    'PASSWORD_RESET_SERIALIZER':
        'qua.serializer.PasswordResetSerializer',
}
CELERY_BEAT_SCHEDULE = {

}
CELERY_TIMEZONE = 'Africa/Nairobi'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, '../build')
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'bot.wsgi.application'
ASGI_APPLICATION = "bot.routing.application"


AUTH_PASSWORD_VALIDATORS = [{
    'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', },
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
     },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Nairobi'

USE_I18N = True

USE_L10N = True

USE_TZ = True

DEFAULT_FILE_STORAGE = 'bot.storage_backends.MediaStorage'
# aws

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, '../build/static'),
]

STATIC_ROOT = os.path.join(BASE_DIR, "live-static", "static-root")

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'

MEDIA_URL = "/media/"

MEDIA_ROOT = os.path.join(BASE_DIR, "live-static", "media-root")

MEDIAFILES_DIRS = (MEDIA_ROOT)

ROOT_URLCONF = 'bot.urls'
BROKER_POOL_LIMIT = 3
