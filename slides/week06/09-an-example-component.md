---
title: An example - Navigation Bar
---

![foo](/navbar.png "Bootstrap Navbar")

In the example above we can see a very common element in a web application, the navigation bar. Note that it contains a few smaller components, such as a search text field and a dropdown menu.

If we want to recreate this in our app, we can use the following HTML:

~~~html
<div class="collapse navbar-collapse" id="navbarExample01">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
        <li class="nav-item"><a class="nav-link disabled">Disabled</a></li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>
    </ul>
    <form role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
    </form>
</div>
~~~

<small>[More Bootstrap navbars](https://getbootstrap.com/docs/5.3/examples/navbars/)</small>