CREATE or replace VIEW `view_operation_attente_adherent` AS 
select `adh_adherent`.`adh_id` AS `adh_id`,`adh_adherent`.`adh_numero` AS `adh_numero`,`adh_adherent`.`adh_nom` AS `adh_nom`,`adh_adherent`.`adh_prenom` AS `adh_prenom`,`cpt_compte`.`cpt_label` AS `cpt_label`,`cpt_compte`.`cpt_solde` AS `cpt_solde`,`ope_operation`.`ope_montant` AS `ope_montant`,`ope_operation`.`ope_type_paiement` AS `ope_type_paiement`,`ope_operation`.`ope_type_paiement_champ_complementaire` AS `ope_type_paiement_champ_complementaire`, ope_id_banque, `ope_operation`.`ope_date` AS `ope_date`,`ope_operation`.`ope_libelle` AS `ope_libelle`,`ope_operation`.`ope_id` AS `ope_id` from ((`ope_operation` join `cpt_compte` on((`cpt_compte`.`cpt_id` = `ope_operation`.`ope_id_compte`))) join `adh_adherent` on((`adh_adherent`.`adh_id_compte` = `ope_operation`.`ope_id_compte`))) where ((`ope_operation`.`ope_type` = 0) and (`ope_operation`.`ope_type_paiement` in (1,2))) group by `ope_operation`.`ope_id` order by `ope_operation`.`ope_date`;

CREATE OR REPLACE VIEW `view_operation_attente_ferme` AS
 select `fer_ferme`.`fer_id` AS `fer_id`,`fer_ferme`.`fer_numero` AS `fer_numero`,`fer_ferme`.`fer_nom` AS `fer_nom`,`cpt_compte`.`cpt_label` AS `cpt_label`,`cpt_compte`.`cpt_solde` AS `cpt_solde`,`ope_operation`.`ope_montant` AS `ope_montant`,`ope_operation`.`ope_type_paiement` AS `ope_type_paiement`,`ope_operation`.`ope_type_paiement_champ_complementaire` AS `ope_type_paiement_champ_complementaire`, ope_id_banque,`ope_operation`.`ope_date` AS `ope_date`,`ope_operation`.`ope_libelle` AS `ope_libelle`,`ope_operation`.`ope_id` AS `ope_id` from ((`ope_operation` join `cpt_compte` on((`cpt_compte`.`cpt_id` = `ope_operation`.`ope_id_compte`))) join `fer_ferme` on((`fer_ferme`.`fer_id_compte` = `ope_operation`.`ope_id_compte`))) where ((`ope_operation`.`ope_type` = 0) and (`ope_operation`.`ope_type_paiement` in (1,2))) group by `ope_operation`.`ope_id` order by `ope_operation`.`ope_date`;