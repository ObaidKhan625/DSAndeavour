# Generated by Django 4.0.5 on 2022-06-04 13:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_probleminfo_alter_user_topics_status_delete_note_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='topics_status',
            new_name='problem_status',
        ),
    ]
