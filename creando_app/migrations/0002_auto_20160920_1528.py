# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-20 05:28
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('creando_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='clients',
            new_name='client',
        ),
    ]
