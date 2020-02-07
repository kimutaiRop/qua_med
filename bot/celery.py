from __future__ import absolute_import, unicode_literals

import os

from celery import Celery

try:
    # production
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bot.settings')

    app = Celery('bot')
    app.config_from_object('django.conf:settings', namespace='CELERY')
    app.conf.update(BROKER_URL=os.environ['REDIS_URL'],
                    CELERY_RESULT_BACKEND=os.environ['REDIS_URL'])
    app.autodiscover_tasks()

except:
    # development
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bot.settings')

    app = Celery('bot')

    app.config_from_object('django.conf:settings', namespace='CELERY')

    app.autodiscover_tasks()


@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))
