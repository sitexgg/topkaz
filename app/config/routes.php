<?php
return [
// MainController
 '' => [
  'controller' => 'main', // Controller
  'action' => 'index', // Action
 ],

'about' => [
  'controller' => 'main',
  'action' => 'about',
 ],

'contact' => [
  'controller' => 'main',
  'action' => 'contact',
 ],

 'post' => [
  'controller' => 'main',
  'action' => 'post',
 ],

 // Admin Controller

'login' => [
  'controller' => 'admin',
  'action' => 'login',
 ],

 'logout' => [
  'controller' => 'admin',
  'action' => 'logout',
 ],

 'add' => [
  'controller' => 'admin',
  'action' => 'add',
 ],

 'edit' => [
 'controller' => 'admin',
 'action' => 'edit',
 ],

 'delete' => [
  'controller' => 'admin',
  'action' => 'delete',
 ],

];
