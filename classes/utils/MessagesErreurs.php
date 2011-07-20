<?php
//****************************************************************
//
// Createur : Julien PIERRE
// Date de creation : 26/01/2010
// Fichier : MessagesErreurs.php
//
// Description : Classe statique de gestion des erreurs
//
//****************************************************************

/**
 * @name MessagesErreurs.php
 * @author Julien PIERRE
 * @since 26/01/2010
 * 
 * @desc Classe statique de gestion des erreurs
 */
class MessagesErreurs
{
	/*Nouveaux messages d'erreur*/
	//Erreurs techniques
	const ERR_101_CODE = 101;
	const ERR_101_MSG = 'La valeur entrée est trop longue.';
	const ERR_102_CODE = 102;
	const ERR_102_MSG = 'Le format du courriel n\'est pas valide.';
	const ERR_103_CODE = 103;
	const ERR_103_MSG = 'Le format de la date n\'est pas valide.';
	const ERR_104_CODE = 104;
	const ERR_104_MSG = 'L\identifiant de l\'objet n\'est pas valide.';
	const ERR_105_CODE = 105;
	const ERR_105_MSG = 'La date saisie n\'existe pas.';
	const ERR_106_CODE = 106;
	const ERR_106_MSG = 'Le format de l\'heure n\'est pas valide.';
	const ERR_107_CODE = 107;
	const ERR_107_MSG = 'L\'heure saisie n\'existe pas.';
	const ERR_108_CODE = 108;
	const ERR_108_MSG = 'Ce champ doit être de type entier.';
	const ERR_109_CODE = 109;
	const ERR_109_MSG = 'Ce champ doit être de type float.';
	const ERR_110_CODE = 110;
	const ERR_110_MSG = 'Le champ "Lots" doit être de type tableau.';
	const ERR_111_CODE = 111;
	const ERR_111_MSG = 'Le champ "Produits" doit être de type tableau.';
	const ERR_112_CODE = 112;
	const ERR_112_MSG = 'Des éléments du marché sont encore en édition.';
	const ERR_113_CODE = 113;
	const ERR_113_MSG = 'Problème technique lors de l\'enregistrement.';
	const ERR_114_CODE = 114;
	const ERR_114_MSG = 'Plusieures lignes dans la base au lieu d\'une attendue.';
	const ERR_115_CODE = 115;
	const ERR_115_MSG = 'Le champ doit être de type tableau.';
	const ERR_116_CODE = 116;
	const ERR_116_MSG = 'Session expirée. Veuillez vous <span class="action-ifb com-cursor-pointer" id="action-ifb-116">reconnecter</span>.';
	const ERR_117_CODE = 117;
	const ERR_117_MSG = 'Format incorrect.';
		
	//Erreurs fonctionelles
	const ERR_201_CODE = 201;
	const ERR_201_MSG = 'Ce champ est obligatoire.';
	const ERR_202_CODE = 202;
	const ERR_202_MSG = 'La date de fin des réservations doit être avant celle du marché.';
	const ERR_203_CODE = 203;
	const ERR_203_MSG = 'L\'heure de fin des réservations doit être avant celle du marché.';
	const ERR_204_CODE = 204;
	const ERR_204_MSG = 'L\'heure de fin du marché doit être après celle du début.';
	const ERR_205_CODE = 205;
	const ERR_205_MSG = 'La quantité max par adhérent doit être plus petite que le stock.';
	const ERR_206_CODE = 206;
	const ERR_206_MSG = 'La taille du lot doit être plus petite que quantité max par adhérent.';
	const ERR_207_CODE = 207;
	const ERR_207_MSG = 'Le marché doit comporter au moins un produit.';
	const ERR_208_CODE = 208;
	const ERR_208_MSG = 'La date de fin du marché doit être après celle du début.';
	const ERR_209_CODE = 209;
	const ERR_209_MSG = 'La date ne doit pas être passée.';
	const ERR_210_CODE = 210;
	const ERR_210_MSG = 'Un produit demandé n\'existe pas dans le système.';
	const ERR_211_CODE = 211;
	const ERR_211_MSG = 'Ce produit est déjà présent dans le marché.';
	const ERR_212_CODE = 212;
	const ERR_212_MSG = 'Aucune réservation pour ce marché.';
	const ERR_213_CODE = 213;
	const ERR_213_MSG = 'Il faut entrer un prix pour ce produit.';
	const ERR_214_CODE = 214;
	const ERR_214_MSG = 'Il faut entrer une quantité pour ce produit.';
	const ERR_215_CODE = 215;
	const ERR_215_MSG = 'Ce champ doit être positif.';
	const ERR_216_CODE = 216;
	const ERR_216_MSG = 'Aucune donnée pour l\'id donné.';
	const ERR_217_CODE = 217;
	const ERR_217_MSG = 'Quantité commandée supérieure à la quantité maximale autorisée.';
	const ERR_218_CODE = 218;
	const ERR_218_MSG = 'Quantité commandée supérieure à la quantité restant en stock.';
	const ERR_219_CODE = 219;
	const ERR_219_MSG = 'Pas de nouveau marché.';
	const ERR_220_CODE = 220;
	const ERR_220_MSG = 'Vous avez déjà une réservation pour ce marché.';
	const ERR_221_CODE = 221;
	const ERR_221_MSG = 'Les réservations sont cloturées pour ce marché.';
	const ERR_222_CODE = 222;
	const ERR_222_MSG = 'Erreur d\'identification.';
	const ERR_223_CODE = 223;
	const ERR_223_MSG = 'Les mots de passe doivent être identique.';
	const ERR_224_CODE = 224;
	const ERR_224_MSG = 'Ce champ doit être au format courriel.';
	const ERR_225_CODE = 225;
	const ERR_225_MSG = 'La date d\'anniversaire ne peut pas être après celle d\'adhésion.';
	const ERR_226_CODE = 226;
	const ERR_226_MSG = 'L\'adhérent doit pouvoir accéder à un module au minimum.';
	const ERR_227_CODE = 227;
	const ERR_227_MSG = 'Aucun numéro de compte ne correspond à celui saisit.';
	const ERR_228_CODE = 228;
	const ERR_228_MSG = 'Erreur dans la base sur le numéro de compte.';
	const ERR_229_CODE = 229;
	const ERR_229_MSG = 'Un des modules n\'existe pas.';
	const ERR_230_CODE = 230;
	const ERR_230_MSG = 'La date ne peut pas être future.';
	const ERR_231_CODE = 231;
	const ERR_231_MSG = 'Impossible de supprimer cet adhérent.';
	const ERR_232_CODE = 232;
	const ERR_232_MSG = 'Sélectionner un producteur.';
	const ERR_233_CODE = 233;
	const ERR_233_MSG = 'Sélectionner un produit.';
	const ERR_234_CODE = 234;
	const ERR_234_MSG = 'Un producteur demandé n\'existe pas dans le système.';
	const ERR_235_CODE = 235;
	const ERR_235_MSG = 'Le mot de passe actuel n\'est pas valide.';
	const ERR_236_CODE = 236;
	const ERR_236_MSG = 'Choisir une option.';
	const ERR_237_CODE = 237;
	const ERR_237_MSG = 'Le montant dépasse le solde du compte.';
	const ERR_238_CODE = 238;
	const ERR_238_MSG = 'Vous n\'avez pas de réservation pour ce marché.';
	
	//Messages d'Information
	const ERR_301_CODE = 301;
	const ERR_301_MSG = 'Enregistrement Terminé.';
	const ERR_302_CODE = 302;
	const ERR_302_MSG = 'Mot de passe mis à jour.';
	const ERR_303_CODE = 303;
	const ERR_303_MSG = 'Réservation supprimée.';
	const ERR_304_CODE = 304;
	const ERR_304_MSG = 'Quantité maximale de réservation atteinte pour ce produit.';
	const ERR_305_CODE = 305;
	const ERR_305_MSG = 'Connexion réussie.';
	const ERR_306_CODE = 306;
	const ERR_306_MSG = 'Compte mis à jour.';
	const ERR_307_CODE = 307;
	const ERR_307_MSG = 'Virement effectué.';
	const ERR_308_CODE = 308;
	const ERR_308_MSG = 'Virement modifié.';
	const ERR_309_CODE = 309;
	const ERR_309_MSG = 'Virement supprimé.';
	/*Fin Nouveaux messages d'erreur*/

	/* ERREURS BDD */
	const ERR_BDD_CONNEXION = "Echec de la connexion à la base.";
	const ERR_BDD_SELECTION = "Echec de la sélection de la base.";
	const ERR_BDD_FERMETURE = "Echec de la fermeture de la connexion.";
	const ERR_BDD_EXECUTION = "Echec de l'exécution de la requête.";
}
?>