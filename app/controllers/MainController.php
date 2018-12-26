<?php

namespace app\controllers;

use app\core\Controller;

class MainController extends Controller {

	public function indexAction() {
		$this->view->render('Home');
	}

	public function aboutAction() {
		$this->view->render('About');
	}

	public function postAction() {
		$this->view->render('Post');
	}

	public function contactAction() {
		if(!empty($_POST))
		{
			$this->view->message('get', $_POST['text']);
		}
		$this->view->render('Contact');
	}
}
