function CaisseTemplate(){this.listeCommandePage='<div id="contenu"><div id="liste_commande_int"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Les Marchés en cours</div><table class="com-table"><tr class="ui-widget ui-widget-header"><th class="com-table-th lst-resa-th-num">N°</th><th class="com-table-th">Date de cloture des Réservations</th><th class="com-table-th">Marché</th>	<th class="com-table-th"></th></tr><!-- BEGIN commande --><tr><td class="com-table-td com-text-align-right">{commande.numero}</td><td class="com-table-td">Le {commande.dateFinReservation} à {commande.heureFinReservation}H{commande.minuteFinReservation}</td><td class="com-table-td">Le {commande.dateMarcheDebut} de {commande.heureMarcheDebut}H{commande.minuteMarcheDebut} à {commande.heureMarcheFin}H{commande.minuteMarcheFin}</td><td class="com-table-td lst-resa-btn-commander"><button class="btn-marche ui-state-default ui-corner-all com-button com-center" id="{commande.id}" >Vente</button></td></tr><!-- END commande --></table></div></div></div></div>';this.listeCommandeVide='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Les Marchés en cours</div><p id="texte-liste-vide">Aucun Marché en cours.</p></div></div>';this.listeMarcheVide='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Vente</div><p id="texte-liste-vide">Aucune réservation en cours.</p></div></div>';this.listeAdherentCommandePage='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Vente du Marché n°{numeroMarche}</div><div class="recherche com-widget-header ui-widget ui-widget-header ui-corner-all"><form id="filter-form"> <span class="conteneur-icon com-float-left ui-widget-content ui-corner-left" title="Chercher"><span class="ui-icon ui-icon-search"></span></span><input class="com-input-text ui-widget-content ui-corner-right" name="filter" id="filter" value="" maxlength="30" size="15" type="text" /></form></div><table class="com-table"><thead><tr class="ui-widget ui-widget-header com-cursor-pointer"><th class="com-table-th com-underline-hover marche-com-th-num-adh"><span class="ui-icon span-icon"></span>Numéro Adhérent</th><th class="com-table-th com-underline-hover marche-com-th-num-adh"><span class="ui-icon span-icon"></span>Numéro Compte</th><th class="com-table-th com-underline-hover marche-com-th-nom"><span class="ui-icon span-icon"></span>Nom</th>	<th class="com-table-th com-underline-hover"><span class="ui-icon span-icon"></span>Prénom</th></tr></thead><tbody><!-- BEGIN listeAdherentCommande --><tr class="com-cursor-pointer achat-commande-ligne" ><td class="com-table-td com-underline-hover"><span class="ui-helper-hidden id-adherent">{listeAdherentCommande.adhId}</span>{listeAdherentCommande.adhNumero}</td><td class="com-table-td com-underline-hover">{listeAdherentCommande.cptLabel}</td><td class="com-table-td com-underline-hover">{listeAdherentCommande.adhNom}</td><td class="com-table-td com-underline-hover">{listeAdherentCommande.adhPrenom}</td></tr><!-- END listeAdherentCommande --></tbody></table></div></div></div>';this.achatCommandePage='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Vente du Marché n°{comNumero}</div><div class="com-widget-content"><div id="achat-info-marche">{adhNumero} :  {adhPrenom} {adhNom}<br/>N° de Compte : {adhCompte}</div><div><span>Solde Actuel : </span><span>{adhSolde} {sigleMonetaire}</span><br/><span>Nouveau Solde : </span><span id="nouveau-solde">{adhNouveauSolde}</span> <span id="nouveau-solde-sigle">{sigleMonetaire}</span></div></div></div><div class="com-clear-float-left com-widget-header ui-widget ui-widget-header ui-corner-all com-center"><span>Total Marché : <span id="total-global"></span> {sigleMonetaire}</span></div><div class="com-float-left"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all" id="achat-pdt-widget"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Achat</div><div class="com-widget-content"><table class="achat-commande-table-pdt"><thead><tr><th>Produit</th><th>Quantité</th><th></th><th>Prix</th><th></th></tr></thead><tbody><!-- BEGIN produits --><tr class="ligne-produit"><td><span class="produit-id ui-helper-hidden">{produits.proId}</span>{produits.nproNom}</td><td class="com-text-align-right td-qte"><input type="text" value="{produits.stoQuantite}" class="com-numeric produit-quantite com-input-text ui-widget-content ui-corner-all" id="produits{produits.proId}quantite" maxlength="12" size="3"/> </td><td class="td-unite">{produits.proUniteMesure}</td><td class="com-text-align-right td-qte" ><input type="text" value="{produits.proPrix}" class="com-numeric produit-prix com-input-text ui-widget-content ui-corner-all" id="produits{produits.proId}prix" maxlength="12" size="3"/></td><td><span>{sigleMonetaire}</span></td></tr><!-- END produits --></tbody><tfoot><tr><td colspan="2"></td><td class="com-text-align-right" >Total :</td><td class="com-text-align-right" ><span id="total-achat">{total}</span></td><td><span>{sigleMonetaire}</span></td></tr></tfoot></table></div></div><div class="com-widget-window ui-widget ui-widget-content ui-corner-all" id="achat-pdt-solidaire-widget" ><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Achat Solidaire</div><div class="com-widget-content"><table class="achat-commande-table-pdt"><thead><tr><th>Produit</th><th>Quantité</th><th></th><th>Prix</th><th></th></tr></thead><tbody><!-- BEGIN produitsSolidaire --><tr class="ligne-produit-solidaire"><td><span class="produit-id ui-helper-hidden">{produitsSolidaire.proId}</span>{produitsSolidaire.nproNom}</td><td class="com-text-align-right td-qte"><input type="text" value="0" class="com-numeric produit-solidaire-quantite com-input-text ui-widget-content ui-corner-all" id="produitsSolidaire{produitsSolidaire.proId}quantite" maxlength="12" size="3"/> </td><td class="td-unite">{produitsSolidaire.proUniteMesure}</td><td class="com-text-align-right td-qte" ><input type="text" value="0" class="com-numeric produit-solidaire-prix com-input-text ui-widget-content ui-corner-all" id="produitsSolidaire{produitsSolidaire.proId}prix" maxlength="12" size="3"/></td><td><span>{sigleMonetaire}</span></td></tr><!-- END produitsSolidaire --></tbody><tfoot><tr><td colspan="2"></td><td class="com-text-align-right" >Total :</td><td class="com-text-align-right" ><span id="total-achat-solidaire">0,00</span></td><td><span>{sigleMonetaire}</span></td></tr></tfoot></table></div></div></div><div class="com-widget-window ui-widget ui-widget-content ui-corner-all com-float-left" id="achat-rechgt-widget"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Rechargement du compte</div><div class="com-widget-content"><table><thead><tr><th>Montant</th><th>Type de Paiement</th><th id="label-champ-complementaire"></th></tr></thead><tbody><tr><td><input type="text" name="montant-rechargement" value="" class="com-numeric com-input-text ui-widget-content ui-corner-all" id="rechargementmontant" maxlength="12" size="3"/> <span>{sigleMonetaire}</span></td><td class="com-center"><select name="typepaiement" id="rechargementtypePaiement"><option value="0">== Choisir ==</option><!-- BEGIN typePaiement --><option value="{typePaiement.tppId}">{typePaiement.tppType}</option><!-- END typePaiement --></select></td><td id="td-champ-complementaire"><input type="text" name="champ-complementaire" value="" class="com-input-text ui-widget-content ui-corner-all" id="rechargementchampComplementaire" maxlength="50" size="15"/></td></tr></tbody></table></div></div><div class="com-clear-float-left com-widget-header ui-widget ui-widget-header ui-corner-all com-center"><button type="button" id="btn-annuler" class="com-btn-edt-multiples ui-state-default ui-corner-all com-button com-center">Annuler</button><button type="button" class="ui-helper-hidden com-btn-edt-multiples ui-state-default ui-corner-all com-button com-center" id="btn-modifier">Modifier</button><button type="button" id="btn-valider" class="ui-state-default ui-corner-all com-button com-center">Valider</button></div></div>';this.achatCommandeSucces='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Achat</div><div class="com-widget-content"><p class="com-msg-confirm-icon"><span class="com-float-left ui-icon ui-icon-check"></span>Achat effectué avec succès.<br/><br/><button id="btn-annuler" class="ui-state-default ui-corner-all com-button com-center">Retourner à la liste des réservations</button></p></div></div></div>'}function CaisseListeCommandeVue(a){this.mCommunVue=new CommunVue();this.construct=function(b){var c=this;$.post("./index.php?m=Caisse&v=CaisseListeCommande",function(d){Infobulle.init();if(d.valid){if(b&&b.vr){Infobulle.generer(b.vr,"")}c.afficher(d)}else{Infobulle.generer(d,"")}},"json")};this.afficher=function(d){var c=this;var b=new CaisseTemplate();if(d.listeCommande.length>0&&d.listeCommande[0].id!=null){var e=new Object;e.commande=new Array();$(d.listeCommande).each(function(){var g={};g.id=this.id;g.numero=this.numero;g.dateFinReservation=this.dateFinReservation.extractDbDate().dateDbToFr();g.heureFinReservation=this.dateFinReservation.extractDbHeure();g.minuteFinReservation=this.dateFinReservation.extractDbMinute();g.dateMarcheDebut=this.dateMarcheDebut.extractDbDate().dateDbToFr();g.heureMarcheDebut=this.dateMarcheDebut.extractDbHeure();g.minuteMarcheDebut=this.dateMarcheDebut.extractDbMinute();g.heureMarcheFin=this.dateMarcheFin.extractDbHeure();g.minuteMarcheFin=this.dateMarcheFin.extractDbMinute();e.commande.push(g)});var f=b.listeCommandePage;$("#contenu").replaceWith(c.affect($(f.template(e))))}else{$("#contenu").replaceWith(c.affect($(b.listeCommandeVide)))}};this.affect=function(b){b=this.affectLienMarche(b);b=this.mCommunVue.comHoverBtn(b);return b};this.affectLienMarche=function(b){b.find(".btn-marche").click(function(){var c={id_commande:$(this).attr("id")};CaisseMarcheCommandeVue(c)});return b};this.construct(a)}function CaisseMarcheCommandeVue(a){this.idCommande=null;this.construct=function(b){var c=this;b.fonction="listeReservation";$.post("./index.php?m=Caisse&v=CaisseMarcheCommande","pParam="+$.toJSON(b),function(d){Infobulle.init();if(d.valid){if(b&&b.vr){Infobulle.generer(b.vr,"")}c.afficher(d)}else{Infobulle.generer(d,"")}},"json");this.idCommande=b.id_commande};this.afficher=function(d){Infobulle.init();if(d.valid){if(d.listeAdherentCommande){var e=this;var b=new CaisseTemplate();if(d.listeAdherentCommande.length>0&&d.listeAdherentCommande[0].adhId!=null){var f=b.listeAdherentCommandePage;d.comNumero=d.listeAdherentCommande[0].comNumero;$("#contenu").replaceWith(e.affect($(f.template(d))))}else{$("#contenu").replaceWith(b.listeMarcheVide)}}else{var g=new TemplateVR();g.valid=false;g.log.valid=false;var c=new VRerreur();c.code=ERR_211_CODE;c.message=ERR_211_MSG;g.log.push(c);Infobulle.generer(g,"")}}else{Infobulle.generer(d,"")}};this.affect=function(b){b=this.affectTri(b);b=this.affectRecherche(b);b=this.affectLienAchat(b);return b};this.affectTri=function(b){b.find(".com-table").tablesorter({sortList:[[2,0]]});return b};this.affectRecherche=function(b){b.find("#filter").keyup(function(){$.uiTableFilter($(".com-table"),this.value)});b.find("#filter-form").submit(function(){return false});return b};this.affectLienAchat=function(b){var c=this;b.find(".achat-commande-ligne").click(function(){var d={id_commande:c.idCommande,id_adherent:$(this).find(".id-adherent").text()};CaisseAchatCommandeVue(d)});return b};this.construct(a)}function CaisseAchatCommandeVue(a){this.idCommande=null;this.idAdherent=null;this.idCompte=null;this.mTypePaiement=[];this.solde=null;this.mCommunVue=new CommunVue();this.etapeValider=0;this.total=0;this.totalSolidaire=0;this.pdtCommande=[];this.construct=function(b){var c=this;this.idCommande=b.id_commande;this.idAdherent=b.id_adherent;b.fonction="infoAchat";$.post("./index.php?m=Caisse&v=CaisseMarcheCommande","pParam="+$.toJSON(b),function(d){Infobulle.init();if(d.valid){if(b&&b.vr){Infobulle.generer(b.vr,"")}c.idCompte=d.adherent.adhIdCompte;c.pdtCommande=d.marche.produits;$(d.typePaiement).each(function(){c.mTypePaiement[this.tppId]=this});c.solde=parseFloat(d.adherent.cptSolde);c.afficher(d)}else{Infobulle.generer(d,"")}},"json")};this.afficher=function(d){Infobulle.init();if(d.valid){var e=this;var b=new CaisseTemplate();var f=b.achatCommandePage;var c=new Object();c.comNumero=d.marche.numero;c.adhNumero=d.adherent.adhNumero;c.adhCompte=d.adherent.cptLabel;c.adhNom=d.adherent.adhNom;c.adhPrenom=d.adherent.adhPrenom;c.sigleMonetaire=gSigleMonetaire;c.total=0;c.produits=new Array();c.produitsSolidaire=new Array();$.each(e.pdtCommande,function(){if(this.id){var g=this;var i={};i.proId=this.id;i.nproNom=this.nom;i.proUniteMesure=this.unite;i.stoQuantite=0;i.proPrix=0;var h=0;$.each(this.lots,function(){if(this.id){var j=this.id;$(d.reservation).each(function(){if(this.idDetailCommande==j){i.stoQuantite=this.quantite*-1;h=this.montant*-1;i.proPrix=h.nombreFormate(2,","," ")}})}});c.total+=h;c.produits.push(i);$(d.stockSolidaire).each(function(){if(i.proId==this.proId){c.produitsSolidaire.push(i)}})}});c.adhSolde=this.solde;c.adhSolde=c.adhSolde.nombreFormate(2,","," ");c.total=c.total.nombreFormate(2,","," ");e.total=c.total;c.typePaiement=e.mTypePaiement;$("#contenu").replaceWith(e.affect($(f.template(c))));e.changerTypePaiement($(":input[name=typepaiement]"));e.majNouveauSolde()}else{Infobulle.generer(d,"")}};this.affect=function(b){b=this.affectSelectTypePaiement(b);b=this.affectNouveauSolde(b);b=this.mCommunVue.comNumeric(b);b=this.affectNouveauPrixProduit(b);b=this.affectChampComplementaire(b);b=this.affectValider(b);b=this.affectAnnuler(b);b=this.affectModifier(b);b=this.affectSupprimerPdt(b);b=this.mCommunVue.comHoverBtn(b);return b};this.affectSelectTypePaiement=function(b){var c=this;b.find(":input[name=typepaiement]").change(function(){c.changerTypePaiement($(this));c.controlerAchat()});return b};this.affectNouveauSolde=function(b){var c=this;b.find(":input[name=montant-rechargement], .produit-prix").keyup(function(){c.majNouveauSolde();c.controlerAchat()});b.find(".produit-solidaire-prix").keyup(function(){c.majNouveauSoldeSolidaire();c.controlerAchat()});return b};this.affectNouveauPrixProduit=function(b){var c=this;b.find(".produit-quantite").keyup(function(){c.majPrixProduit($(this));c.controlerAchat()});b.find(".produit-solidaire-quantite").keyup(function(){c.controlerAchat()});return b};this.affectChampComplementaire=function(b){var c=this;b.find(":input[name=champ-complementaire]").keyup(function(){c.controlerAchat()});return b};this.affectValider=function(b){var c=this;b.find("#btn-valider").click(function(){c.creerRecapitulatif()});return b};this.affectAnnuler=function(b){var c=this;b.find("#btn-annuler").click(function(){c.retourListe()});return b};this.affectModifier=function(b){var c=this;b.find("#btn-modifier").click(function(){c.boutonModifier()});return b};this.affectSupprimerPdt=function(b){if(b.find(".ligne-produit").size()==0){b.find("#achat-pdt-widget").remove()}if(b.find(".ligne-produit-solidaire").size()==0){b.find("#achat-pdt-solidaire-widget").remove()}return b};this.majPrixProduit=function(b){var f=parseFloat(b.val().numberFrToDb());if(isNaN(f)){f=0}var c=b.parent().parent();var d=c.find(".produit-id").text();var e=0;if(this.pdtCommande[d].prixUnitaire!=null){e=this.pdtCommande[d].prixUnitaire*f}if(isNaN(e)){e=0}if(e!=0){c.find(".produit-prix").val(e.nombreFormate(2,","," "))}this.majNouveauSolde()};this.controlerAchat=function(){Infobulle.init();var b=new AchatCommandeValid();var c=b.validAjout(this.getAchatCommandeVO());Infobulle.generer(c,"");return c};this.majTotal=function(){var b=this.calculerTotal();$("#total-achat").text(b.nombreFormate(2,","," "));this.total=b;this.majTotalGlobal()};this.majTotalSolidaire=function(){var b=this.calculerTotalSolidaire();$("#total-achat-solidaire").text(b.nombreFormate(2,","," "));this.totalSolidaire=b;this.majTotalGlobal()};this.majTotalGlobal=function(){var b=this.totalSolidaire+this.total;$("#total-global").text(b.nombreFormate(2,","," "))};this.calculerTotal=function(){var b=0;$(".produit-prix").each(function(){var c=parseFloat($(this).val().numberFrToDb());if(isNaN(c)){c=0}b+=c});return b};this.calculerTotalSolidaire=function(){var b=0;$(".produit-solidaire-prix").each(function(){var c=parseFloat($(this).val().numberFrToDb());if(isNaN(c)){c=0}b+=c});return b};this.majNouveauSolde=function(){this.majTotal();var b=this.calculNouveauSolde();if(b<=0){$("#nouveau-solde").addClass("com-nombre-negatif");$("#nouveau-solde-sigle").addClass("com-nombre-negatif")}else{$("#nouveau-solde").removeClass("com-nombre-negatif");$("#nouveau-solde-sigle").removeClass("com-nombre-negatif")}$("#nouveau-solde").text(b.nombreFormate(2,","," "))};this.majNouveauSoldeSolidaire=function(){this.majTotalSolidaire();var b=this.calculNouveauSolde();if(b<=0){$("#nouveau-solde").addClass("com-nombre-negatif");$("#nouveau-solde-sigle").addClass("com-nombre-negatif")}else{$("#nouveau-solde").removeClass("com-nombre-negatif");$("#nouveau-solde-sigle").removeClass("com-nombre-negatif")}$("#nouveau-solde").text(b.nombreFormate(2,","," "))};this.calculNouveauSolde=function(){var d=this.total;if(isNaN(d)){d=0}var c=this.totalSolidaire;if(isNaN(c)){c=0}var b=parseFloat($(":input[name=montant-rechargement]").val().numberFrToDb());if(isNaN(b)){b=0}return this.solde-d-c+b};this.changerTypePaiement=function(d){var c=d.val();var b=this.getLabelChamComplementaire(c);if(b!=null){$("#label-champ-complementaire").text(b).show();$("#td-champ-complementaire").show()}else{$("#label-champ-complementaire").text("").hide();$(":input[name=champ-complementaire]").val("");$("#td-champ-complementaire").hide()}};this.getLabelChamComplementaire=function(c){var b=this.mTypePaiement;if(b[c]){if(b[c].tppChampComplementaire==1){return b[c].tppLabelChampComplementaire}}return null};this.getAchatCommandeVO=function(){var b=new AchatCommandeVO();b.id=this.idCommande;b.idCompte=this.idCompte;b.produits=this.getProduitsVO();b.produitsSolidaire=this.getProduitsSolidaireVO();b.rechargement=this.getRechargementVO();return b};this.getProduitsVO=function(){var b=new Array();$(".ligne-produit").each(function(){var d=new ProduitAchatVO();d.id=$(this).find(".produit-id").text();var e=$(this).find(".produit-quantite").val().numberFrToDb();if(!isNaN(e)&&!e.isEmpty()&&e!=0){e=parseFloat(e);d.quantite=e*-1;var c=$(this).find(".produit-prix").val().numberFrToDb();if(!isNaN(c)&&!c.isEmpty()&&c!=0){c=parseFloat(c);d.prix=c*-1}b.push(d)}else{var c=$(this).find(".produit-prix").val().numberFrToDb();if(!isNaN(c)&&!c.isEmpty()&&c!=0){c=parseFloat(c);d.prix=c*-1;b.push(d)}}});return b};this.getProduitsSolidaireVO=function(){var b=new Array();$(".ligne-produit-solidaire").each(function(){var d=new ProduitAchatVO();d.id=$(this).find(".produit-id").text();var e=$(this).find(".produit-solidaire-quantite").val().numberFrToDb();if(!isNaN(e)&&!e.isEmpty()&&e!=0){e=parseFloat(e);d.quantite=e*-1;var c=$(this).find(".produit-solidaire-prix").val().numberFrToDb();if(!isNaN(c)&&!c.isEmpty()&&c!=0){c=parseFloat(c);d.prix=c*-1}b.push(d)}else{var c=$(this).find(".produit-solidaire-prix").val().numberFrToDb();if(!isNaN(c)&&!c.isEmpty()&&c!=0){c=parseFloat(c);d.prix=c*-1;b.push(d)}}});return b};this.getRechargementVO=function(){var b=new RechargementCompteVO();var c=$(":input[name=montant-rechargement]").val().numberFrToDb();b.id=this.idCompte;if(!isNaN(c)&&!c.isEmpty()&&c!=0){c=parseFloat(c);b.montant=c}b.typePaiement=$(":input[name=typepaiement]").val();if(this.getLabelChamComplementaire(b.typePaiement)!=null){b.champComplementaireObligatoire=1;b.champComplementaire=$(":input[name=champ-complementaire]").val()}else{b.champComplementaireObligatoire=0}return b};this.creerRecapitulatif=function(){var b=this.controlerAchat();if(b.valid){if(this.etapeValider==0){$(".produit-quantite,.produit-solidaire-quantite,#rechargementchampComplementaire,#rechargementtypePaiement").each(function(){$(this).inputToText()});$(".produit-prix,.produit-solidaire-prix,#rechargementmontant").each(function(){$(this).inputToText("montant")});$("#btn-modifier").show();$("#btn-annuler").hide();this.etapeValider=1}else{if(this.etapeValider==1){this.enregistrerAchat()}}}};this.enregistrerAchat=function(){var c=this;var b=this.getAchatCommandeVO();b.fonction="acheter";$.post("./index.php?m=Caisse&v=CaisseMarcheCommande","pParam="+$.toJSON(b),function(e){if(e.valid){var d=new CaisseTemplate();var f=d.achatCommandeSucces;$("#contenu").replaceWith(c.affectAnnuler($(f)))}else{c.boutonModifier();Infobulle.generer(e,"")}c.etapeValider=0},"json")};this.boutonModifier=function(){if(this.etapeValider==1){$(".produit-prix,.produit-solidaire-prix,#rechargementmontant,.produit-quantite,.produit-solidaire-quantite,#rechargementchampComplementaire,#rechargementtypePaiement").each(function(){$(this).textToInput()});$("#btn-modifier").hide();$("#btn-annuler").show();this.etapeValider=0}};this.retourListe=function(){CaisseMarcheCommandeVue({id_commande:this.idCommande})};this.construct(a)};