<?php
//****************************************************************
//
// Createur : Julien PIERRE
// Date de creation : 31/03/2010
// Fichier : ListeCommandeControleur.php
//
// Description : Classe ListeCommandeControleur
//
//****************************************************************

// Inclusion des classes
include_once(CHEMIN_CLASSES_VIEW_MANAGER . "ListeCommandeEnCoursViewManager.php");
include_once(CHEMIN_CLASSES_RESPONSE . "ListeCommandeResponse.php" );

/**
 * @name ListeCommandeControleur
 * @author Julien PIERRE
 * @since 31/03/2010
 * @desc Classe controleur d'une ListeCommande
 */
class ListeCommandeControleur
{	
	/**
	* @name getListeCommandeEnCours()
	* @return ListeCommandeResponse
	* @desc Retourne la liste des commandes en cours
	*/
	public function getListeCommandeEnCours() {
		$lListeCommande = new ListeCommandeResponse();
		$lListeCommande->setListeCommande( ListeCommandeEnCoursViewManager::selectNonReservee($_SESSION['id_compte']) );
		return $lListeCommande;
	}
}
?>
