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
		$this->view->render('Contact');
	}
}
