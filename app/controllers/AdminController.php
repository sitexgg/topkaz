<?php

namespace app\controllers;

use app\core\Controller;

class AdminController extends Controller 
{

	public function __construct($route)
	{
		parent::__construct($route);
		$this->view->layout = 'admin';
		$_SESSION['admin'] = 1;
	}

	public function loginAction() {
		$this->view->render('Login');
	}

	public function logoutAction() {
		exit('Logout admin panel');
	}

	public function addAction() {
		$this->view->render('Add');
	}

	public function editAction() {
		$this->view->render('Edit');
	}

	public function deleteAction() {
		exit('Post deleting');
	}
}
