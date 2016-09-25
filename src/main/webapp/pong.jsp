<%-- //[START all]--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>

<%-- //[START imports]--%>
<%@ page import="com.googlecode.objectify.Key" %>
<%@ page import="com.googlecode.objectify.ObjectifyService" %>
<%-- //[END imports]--%>

<%@ page import="java.util.List" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<html>
<head>
    <link type="text/css" rel="stylesheet" href="/stylesheets/main.css"/>

    <script src="//cdn.jsdelivr.net/phaser/2.6.2/phaser.min.js"></script>
    <script src="scripts/pong.js"></script>
</head>

<body>
    <h1>EXTREME Pong!</h1>
    <p>Red uses WASD, Blue uses arrow keys</p>
    <p>(HINT: It''s EXTREME cus you can move on the x axis)</p>
</body>
