## references: <https://realpython.com/get-started-with-django-1/>

## mini project related to  Django to practice.




`python = python3 ` 
`install Django`



```
$ cd rp-portfolio/
```

Create vertual env
===================
- Create venv
```
$ python3 -m venv venv
```

- Activate it 

```
$ source venv/bin/activate
```


We can see

```
(venv) sudip@sudip:~/mini_project/django/rp-portfolio$
```
Create a Djnago Application
============================

```
$ python manage.py startapp hello_world
```

Install app in your project
================================



in 
`personal_portfolio/settings.py`


add `last line`

```
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'hello_world',
]

```

This means, project will know that we install `hello_world` app in our project.


Create view
============

Views in Django are a collection of `functions` or `classes` inside the `views.py` file in your app directory.


Navigate to the `views.py` in `hello_world` directory.
Add following lines:


```
from django.shortcuts import render

def hello_world(request):
    return render(request, 'hello_world.html', {})
```


After creating view function, create `HTML` template to display to the `user.render()`.

for this follow these steps:

```
$ mkdir hello_world/templates/
$ touch hello_world/templates/hello_world.html
```


after this to `HTML` file which we createde just now


```
<h1>Hello, World!</h1>
```


small stuff is added to our app. 
Now we need to add our `url` to our project os that it will be seen our webpage.

Your project has a module called urls.py in which you need to include a URL configuration for the hello_world app. Inside personal_portfolio/urls.py, add the following:

```
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('hello_world.urls')),
]
```



The hello_world.urls module doesn’t exist yet, so you’ll need to create it:

```
$ touch hello_world/urls.py
```

create a list of URL patterns that correspond to the various view functions. At the moment, we have only created one view function, so we need only create one URL:

```
from django.urls import path
from hello_world import views

urlpatterns = [
    path('', views.hello_world, name='hello_world'),
]
```
Now, when you restart the server and visit localhost:8000, you should be able to see the HTML template you created



=======================================================================================================================================


Let's create another project.


Delete `hello_world` directory, `path to hello_world` from project setting and `url` from `personal_portfolio/urls.py`

We are going to create a new app called `project`




Create an app
==============

```
$ python manage.py startapp projects
```

Add to setting
================

add `projects` to setting as we did for `hello_world`




Project app:models
==========================

If you want to store data to display on a website, then you’ll need a database. Typically, if you want to create a database with tables and columns within those tables, you’ll need to use SQL to manage the database. But when you use Django, you don’t need to learn a new language because it has a built-in `Object Relational Mapper` (ORM).


When you’re using an ORM, the classes you build that represent database tables are referred to as models. In Django, they live in the models.py module of each Django app.

In your projects app, you’ll only need one table to store the different projects you’ll display to the user. That means you’ll only need to create one model in models.py.

The model you’ll create will be called Project and will have the following fields:

* title will be a short string field to hold the name of your project.
* description will be a larger string field to hold a longer piece of text.
* technology will be a string field, but its contents will be limited to a select number of choices.
* image will be an image field that holds the file path where the image is stored.



To create this model, we’ll create a new class in models.py and add the following in our fields:


```
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technology = models.CharField(max_length=20)
    image = models.FilePathField(path="/img")
```

Django models come with many (built-in model field types)[#link]. We’ve only used three in this model. CharField is used for short strings and specifies a maximum length.




We have created class, now we need to create `database` in django. 

By default, the Django `ORM` creates databases in `SQLite`, but we can use other databases that use the `SQL language`, such as `PostgreSQL` or `MySQL`, with the Django `ORM`.




Migration
===========



To start the process of creating our database, we need to create a `migration`.


 A migration is a file containing a Migration class with rules that tell Django what changes need to be made to the database. To create the migration, type the following command in the console, making sure the directory `rp-portfolio directory`:


```
$ python manage.py makemigrations projects
Migrations for 'projects':
  projects/migrations/0001_initial.py
    - Create model Project
```

We can see `projects/migrations/0001_initial.py`


Now that you’ve create a migration file, you need to apply the migrations set out in the migrations file and create your database using the migrate command:



```
$ python manage.py migrate projects
Operations to perform:
  Apply all migrations: projects
Running migrations:
  Applying projects.0001_initial... OK
```

`db.sqlite3` has been created in the root of your project.

NOw, we can now create rows in your table that are the various projects we want to show on your portfolio site.

To create instances of our Project class, we’re going to have to use the `Django shell`.


```
$ python manage.py shell
```

output should be 

```
Python 3.7.9 (default, Aug 18 2020, 06:22:45) 
[GCC 7.5.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>> 
>>> 
>>> 
```



We’re first going to create a new project with the following attributes:

* name: My First Project
* description: A web development project.
* technology: Django
* image: img/project1.png

To do this, we create an instance of the Project class in the Django shell:

```
>>> p1 = Project(
...     title='My First Project',
...     description='A web development project.',
...     technology='Django',
...     image='img/project1.png'
... )
>>> p1.save()
```


The final step in this section is to create two more sample projects:


```
>>> p2 = Project(
...     title='My Second Project',
...     description='Another web development project.',
...     technology='Flask',
...     image='img/project2.png'
... )
>>> p2.save()
>>> p3 = Project(
...     title='My Third Project',
...     description='A final development project.',
...     technology='Django',
...     image='img/project3.png'
... )
>>> p3.save()
```
 * This is how we create `models` in Django and build migration files so that we can translate these model classes into `database tables`. We’ve also used the Django shell to create three instances of our `model class`.


Projects App: Views
=====================

Now we’ve created the projects to display on your portfolio site, we’ll need to create view functions to send the data from the database to the HTML templates.

So we will create two different views.

- An index view that shows a snippet of information about each project
- A detail view that shows more information on a particular topic


**Starting with index view**


Inside `views.py`, we’ll need to import the `Project class` from `models.py` and create a `function project_index()` that renders a template called `project_index.html`. Where we make `QRM` query to select all objects in the `Project table`.

































