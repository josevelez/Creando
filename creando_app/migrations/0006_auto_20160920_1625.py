# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-20 06:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('creando_app', '0005_auto_20160920_1540'),
    ]

    operations = [
        migrations.RenameField(
            model_name='client',
            old_name='widht_field',
            new_name='width_field',
        ),
    ]
