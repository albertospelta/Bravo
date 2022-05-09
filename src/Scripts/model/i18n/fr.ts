/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
 * 
 * French translation by: mibenlamine
*/
import { Locale } from '../i18n';
import { strings as _ } from '../strings';

const locale: Locale = {

    locale: "fr", //DO NOT TRANSLATE
    enName: "French", //DO NOT TRANSLATE
    name: "Français",

    strings: {
        [_.addCtrlTitle]: "Ouvrir",
        [_.aggregatedTableName]: "Plusieurs tables",
        [_.AnalyzeModel]: "Analyse Modèle",
        [_.analyzeModelSummary]: `Votre jeu de données est <strong>{size:bytes}</strong> volumineux et contient <strong>{count}</strong> colonne{{s}}`,
        [_.analyzeModelSummary2]: `, <span class="text-highlight"><strong>{count}</strong> d'entre eux {{sont|est}} non référencé{{s}} au sein du Modèle.</span>`,
        [_.appName]: "Bravo for Power BI", //DO NOT TRANSLATE
        [_.appUpdateAvailable]: "Nouvelle version disponible: {version}",
        [_.appUpdateChangelog]: "Journal des modifications",
        [_.appUpdateDownload]: "Télécharger",
        [_.appUpdateViewDetails]: "Voir les détails",
        [_.appUpToDate]: "Bravo est à jour",
        [_.appVersion]: "Version {version}",
        [_.backupReminder]: "Avant de continuer, n'oubliez pas de sauvegarder une copie de votre rapport actuel - <b>certains changements ne sont pas annulables</b>.",
        [_.BestPractices]: "Bonnes Pratiques",
        [_.canceled]: "Annulé",
        [_.changeStatusAdded]: "A",
        [_.changeStatusAddedTitle]: "Ajouté",
        [_.changeStatusDeleted]: "D",
        [_.changeStatusDeletedTitle]: "Supprimé",
        [_.changeStatusModified]: "M",
        [_.changeStatusModifiedTitle]: "Modifié",
        [_.clearCtrlTitle]: "Vider",
        [_.closeCtrlTitle]: "Fermer",
        [_.closeOtherTabs]: "Fermer les autres",
        [_.closeTab]: "Fermer",
        [_.collapseAllCtrlTitle]: "Réduire tout",
        [_.columnExportedCompleted]: "La table a été exportée avec succès.",
        [_.columnExportedFailed]: "La table n'a pas exportée pour une raison inconnue.",
        [_.columnExportedTruncated]: "Cette table a été tronquée parce que le nombre de lignes dépasse le maximum autorisé.",
        [_.columnMeasureFormatted]: "Cette mesure est déjà formatée.",
        [_.columnMeasureNotFormattedTooltip]: "Cette mesure n'est pas formatée.",
        [_.columnMeasureWithError]: "Cette mesure contient des erreurs.",
        [_.columnUnreferencedExplanation]: `<span class="text-highlight">Les colonnes non référencées</span> peuvent généralement être retirées du modèle pour en optimiser la performance. Avant de les retirer, assurez vous qu'elles ne sont pas utilisées dans les rapports, Bravo ne peut pas le déterminer.`,
        [_.columnUnreferencedTooltip]: "Cette colonne n'est pas référencée dans votre modèle.",
        [_.confirmTabCloseMessage]: "Vous n'avez pas sauvegardé les changements faits sur ce document.<br>Etes vous sûrs de vouloir le fermer?",
        [_.connectBrowse]: "Parcourir",
        [_.connectDatasetsTableEndorsementCol]: "Approbation",
        [_.connectDatasetsTableNameCol]: "Libellé",
        [_.connectDatasetsTableOwnerCol]: "Propriétaire",
        [_.connectDatasetsTableWorkspaceCol]: "Espace de travail",
        [_.connectDialogAttachPBIMenu]: "Jeux de données sur powerbi.com",
        [_.connectDialogConnectPBIMenu]: "Rapports actifs sur Power BI Desktop",
        [_.connectDialogOpenVPXMenu]: "Fichiers VPAX",
        [_.connectDialogTitle]: "Ouvrir",
        [_.connectDragFile]: "Glisser un fichier VPAX ici<br>ou parcourir votre ordinateur",
        [_.connectNoReports]: "Aucun rapport actif trouvé.<br>Ouvrez un rapport avec Power BI Desktop et attendez qu'il s'affiche ici.",
        [_.copiedErrorDetails]: "Copié!",
        [_.copy]: "Copier",
        [_.copyErrorDetails]: "Copier l'erreur",
        [_.copyFormulaCtrlTitle]: "Copier la mesure formatée",
        [_.copyMessage]: "Copier le Message",
        [_.copyright]: "Tous droits réservés.",
        [_.createIssue]: "Remonter le problème",
        [_.cut]: "Couper",
        [_.dataUsageLink]: "Comment sont utilisées vos données?", 
        [_.dataUsageMessage]: `Pour formater votre code, Bravo envoie les mesures de ce jeu de données à DAX Formatter, un service géré par SQLBI, via une connexion sécurisée.<p><strong>Le service ne stocke vos données nulle part.</strong></p><p>Certaines informations comme les fonctions DAX les plus utilisées, un index complexe et la taille moyenne des requêtes sont sauvegardées à des fins statistiques.</p>`,
        [_.dataUsageTitle]: "Comment sont utilisées vos données?",
        [_.DaxFormatter]: "Formater DAX",
        [_.daxFormatterAgreement]: "Pour formater le code DAX, Bravo envoie vos mesures au service DAX Formatter.",
        [_.daxFormatterAnalyzeConfirm]: "Pour effectuer une analyse, Bravo doit envoyer toutes les mesures au service DAX Formatter. Êtes-vous sûr de continuer?",
        [_.daxFormatterAutoPreviewOption]: "Aperçu automatique",
        [_.daxFormatterFormat]: "Format Sélectionné",
        [_.daxFormatterFormatDisabled]: "Format (Non supporté)",
        [_.daxFormatterFormattedCode]: "Formaté (Aperçu)",
        [_.daxFormatterOriginalCode]: "Actuel",
        [_.daxFormatterPreviewAllButton]: "Aperçu de toutes les Mesures",
        [_.daxFormatterPreviewButton]: "Aperçu",
        [_.daxFormatterPreviewDesc]: "Pour générer l'aperçu, Bravo a besoin d'envoyer cette mesure au service DAX Formatter.",
        [_.daxFormatterSuccessSceneMessage]: "Félicitations, <strong>{count} mesure{{s}}</strong> formatée{{s}} avec succès.",
        [_.daxFormatterSummary]: `Votre jeu de données contient {count} mesure{{s}}: <span class="text-error"><strong>{errors:number}</strong> avec erreurs</strong></span>, <span class="text-highlight"><strong>{formattable:number}</strong> à formater</span>, <strong>{analyzable:number}</strong> à analyser (<span class="link manual-analyze">analyser maintenant</span>).`,
        [_.daxFormatterSummaryNoAnalysis]: `Votre jeu de données contient <strong>{count}</strong> mesure{{s}}: <span class="text-error"><strong>{errors:number}</strong> avec erreurs</strong></span> et <span class="text-highlight"><strong>{formattable:number}</strong> à formater.</span>`,
        [_.defaultTabName]: "Sans titre",
        [_.dialogCancel]: "Annuler",
        [_.dialogOK]: "OK",
        [_.dialogOpen]: "Ouvrir",
        [_.docLimited]: "Limité",
        [_.docLimitedTooltip]: "Toutes les fonctionnalités ne sont pas décrites dans ce document.",
        [_.doneCtrlTitle]: "Terminé",
        [_.emailAddress]: "Adresse mail",
        [_.emailAddressPlaceholder]: "Saisir votre adresse mail",
        [_.error]: "Erreur",
        [_.errorAborted]: "Opération annulée.",
        [_.errorAnalysisServicesConnectionFailed]: "Un problème de connexion s'est produit entre le serveur et Bravo.",
        [_.errorCheckForUpdates]: "Impossible de vérifier les mises à jour - le serveur distant n'est pas accessible.",
        [_.errorConnectionUnsupported]: "La connexion à la ressource souhaitée n'est pas supportée.",
        [_.errorDatasetConnectionUnknown]: "Connexion non spécifiée.",
        [_.errorDatasetsEmptyListing]: "Aucun rapport disponible.",
        [_.errorDatasetsListing]: "Impossible de récupérer la liste des jeux de données à partir de Power BI Service.",
        [_.errorExportDataFileError]: "Une erreur s'est produite lors de l'export des données. Merci d'essayer à nouveau.",
        [_.errorManageDateTemplateError]: "Une exception s'est produite durant l'exécution du moteur de template DAX.",
        [_.errorNetworkError]: "Vous n'êtes pas connecté à Internet.",
        [_.errorNone]: "Erreur non spécifiée.",
        [_.errorNotAuthorized]: "Vous n'êtes pas autorisé à voir la ressource spécifiée.",
        [_.errorNotConnected]: "Vous n'êtes pas connecté à Power BI - veuillez vous connecter avant de continuer.",
        [_.errorNotFound]: "Impossible de se connecter à la ressource spécifiée.",
        [_.errorReportConnectionUnknown]: "Connexion non valide.",
        [_.errorReportConnectionUnsupportedAnalysisServecesCompatibilityMode]: "Le mode de compatibilité de l'instance Analysis Services de Power BI Desktop n'est pas PowerBI.",
        [_.errorReportConnectionUnsupportedAnalysisServecesConnectionNotFound]: "Connexion TCP introuvable pour Power BI Desktop Analysis Services.",
        [_.errorReportConnectionUnsupportedAnalysisServecesProcessNotFound]: "Le processus de l'instance Analysis Services de Power BI Desktop est introuvable.", 
        [_.errorReportConnectionUnsupportedConnectionException]: "Une exception a été levée lors de la connexion à l'instance Analysis Services de Power BI Desktop.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionIsEmpty]: "L'instance Analysis Services de Power BI Desktop ne contient aucune base de données. Essayez de vous connecter au rapport via l'icône Bravo des outils externes de Power BI Desktop.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionUnexpectedCount]: "L'instance Analysis Services de Power BI Desktop contient un nombre inattendu de bases de données (> 1).",
        [_.errorReportConnectionUnsupportedProcessNotYetReady]: "Power BI Desktop est en train de démarrer ou l'instance Analysis Services n'est pas encore prête.", 
        [_.errorReportsEmptyListing]: "Aucun rapport disponible.",
        [_.errorRetry]: "Réessayer",
        [_.errorSignInMsalExceptionOccurred]: "Erreur inattendue lors de l'authentification.",
        [_.errorSignInMsalTimeoutExpired]: "La demande d'authentification a été annulée suite à l'expiration du timeout.",
        [_.errorTimeout]: "Timeout sur la demande.",
        [_.errorTitle]: "Oops...",
        [_.errorTOMDatabaseDatabaseNotFound]: "La base de données n'existe pas ou l'utilisateur n'a pas les droits d'accès suffisants.",
        [_.errorTOMDatabaseUpdateConflictMeasure]: "La mise à jour demandée est en conflit avec l'état courant de la ressouce cible.",
        [_.errorTOMDatabaseUpdateErrorMeasure]: "La mise à jour demandée a échoué car une ou plusieurs mesures comportent des erreurs.", 
        [_.errorTOMDatabaseUpdateFailed]: "La mise à jour de la base de données a échoué lors de la sauvegarde des changements fait en local sur le modèle sur le serveur de bases de données.",
        [_.errorTryingToUpdateMeasuresWithErrors]: `La mise à jour demandée a échoué car les mesures suivantes comportent des erreurs:<br><strong>{measures}</strong>`,
        [_.errorUnhandled]: "Erreur non gérée - merci de la remonter en fournissant l'identifiant de suivi, si disponible.",
        [_.errorUnspecified]: "Erreur non spécifiée.",
        [_.errorUserSettingsSaveError]: "Impossible de sauvegarder les propriétés.",
        [_.errorVpaxFileImportError]: "Une erreur s'est produite lors de l'importation du fichier VPAX.",
        [_.errorVpaxFileExportError]: "Une erreur s'est produite lors de l'exportation du fichier VPAX.",
        [_.expandAllCtrlTitle]: "Développer tout",
        [_.ExportData]: "Exporter Données",
        [_.exportDataCSVCustomDelimiter]: "Délimiteur de champ personnalisé",
        [_.exportDataCSVDelimiter]: "Délimiteur de champs",
        [_.exportDataCSVDelimiterComma]: "Virgule",
        [_.exportDataCSVDelimiterDesc]: `Choisir le caractère à utiliser comme délimiteur pour chaque champ. <em>Automatique</em> utilise le caractère par défaut en fonction de la culture de votre système.`,
        [_.exportDataCSVDelimiterOther]: "Autres...",
        [_.exportDataCSVDelimiterPlaceholder]: "Caractère",
        [_.exportDataCSVDelimiterSemicolon]: "Point-virgule",
        [_.exportDataCSVDelimiterSystem]: "Automatique",
        [_.exportDataCSVDelimiterTab]: "Tabulation",
        [_.exportDataCSVEncoding]: "Encodage",
        [_.exportDataCSVEncodingDesc]: "",
        [_.exportDataCSVFolder]: "Sauver dans un sous-dossier",
        [_.exportDataCSVFolderDesc]: "Enregistrer les fichiers CSV générés dans un sous-dossier.",
        [_.exportDataCSVQuote]: "Mettre les chaînes de caractères entre Apostrophes",
        [_.exportDataCSVQuoteDesc]: "S'assurer que chaque chaîne de caractères est mise entre Guillemets.",
        [_.exportDataExcelCreateExportSummary]: "Exporter le résumé",
        [_.exportDataExcelCreateExportSummaryDesc]: "Ajouter un onglet supplémentaire au fichier exporté contenant le résumé du job.",
        [_.exportDataExport]: "Export Sélectionné",
        [_.exportDataExportAs]: "Exporter En",
        [_.exportDataExportAsDesc]: "",
        [_.exportDataExporting]: "Export {table}...",
        [_.exportDataExportingDone]: "Fait!",
        [_.exportDataNoColumns]: "Cette table n'est pas exportable car elle ne comporte aucune colonne.",
        [_.exportDataNotQueryable]: "Cette table n'est pas exportable car il contient une ou plusieurs colonnes calculées avec une expression invalide ou des colonnes qui doivent être recalculées.",
        [_.exportDataOpenFile]: "Ouvrir le fichier exporté",
        [_.exportDataOpenFolder]: "Ouvrier le dossier d'export",
        [_.exportDataOptions]: "Options d'export",
        [_.exportDataStartExporting]: "Initialisation...",
        [_.exportDataSuccessSceneMessage]: "<strong>{count}/{total} table{{s}}</strong> {{ont|a}} été exportée{{s}} avec succès.",
        [_.exportDataSummary]: "Votre jeu de données comporte <strong>{count} table{{s}}</strong> qui {{peuvent|peut}} être exportée{{s}}.",
        [_.exportDataTypeCSV]: "CSV (Comma-separated values)",
        [_.exportDataTypeXLSX]: "Fichier Excel",
        [_.failed]: "Echoué",
        [_.filterMeasuresWithErrorsCtrlTitle]: "Afficher les mesures non formatées / avec erreurs uniquement",
        [_.filterUnrefCtrlTitle]: "Afficher les colonnes non référencées uniquement",
        [_.formattingMeasures]: "Formatage des mesures...",
        [_.goBackCtrlTitle]: "Annuler et revenir à l'arrière",
        [_.groupByTableCtrlTitle]: "Regrouper par Table",
        [_.helpConnectVideo]: "Comment se connecter",
        [_.helpCtrlTitle]: "Aide",
        [_.hideUnsupportedCtrlTitle]: "Supporté uniquement",
        [_.less]: "Moins",
        [_.license]: "Publié sous licence MIT.",
        [_.loading]: "Chargement...",
        [_.ManageDates]: "Gérer Dates",
        [_.manageDatesApplyCtrlTitle]: "Appliquer les Changements",
        [_.manageDatesAuto]: "Auto",
        [_.manageDatesAutoScan]: "Scan Automatique",
        [_.manageDatesAutoScanActiveRelationships]: "Relations Actives",
        [_.manageDatesAutoScanDesc]: "Choisir <em>En entier</em> pour scanner toutes les colonnes de dates. Opter pour <em>Choisir les Colonnes...</em> pour sélectionner les colonnes à utiliser. Sélectionner <em>Relations Actives</em> et <em>Relations Inactives</em> pour scanner uniquement les colonnes ayant des relations.",
        [_.manageDatesAutoScanDisabled]: "Désactivé",
        [_.manageDatesAutoScanFirstYear]: "Première Année",
        [_.manageDatesAutoScanFirstYearDesc]: "",
        [_.manageDatesAutoScanFull]: "En entier",
        [_.manageDatesAutoScanInactiveRelationships]: "Relations inactives",
        [_.manageDatesAutoScanLastYear]: "Dernière Année",
        [_.manageDatesAutoScanLastYearDesc]: "",
        [_.manageDatesAutoScanSelectedTablesColumns]: "Choisir les Colonnes...",
        [_.manageDatesBrowserPlaceholder]: "Aucune modification",
        [_.manageDatesCalendarDesc]: "Choisir un modèle de calendrier à appliquer pour ce modèle de données. Bravo créera les tables requises ou les mettra à jour sans toucher aux relations existantes.", 
        [_.manageDatesCalendarTemplateName]: "Modèle de Calendrier",
        [_.manageDatesCalendarTemplateNameDesc]: "Sélectionner <em>Mensuel</em> pour un calendrier basé sur un nombre de mois différents. Sélectionner <em>Hebdomadaire</em> pour des calendriers 445-454-544-ISO. Sélectionner <em>Personnalisé</em> pour des calendriers flexibles en taille.",
        [_.manageDatesCreatingTables]: "Mise à jour du Modèle...",
        [_.manageDatesDatesDesc]: "Configurer le format des dates dans votre modèle.",
        [_.manageDatesDatesTableDesc]: "Voici la table à utiliser dans les rapports pour les dates.",
        [_.manageDatesDatesTableName]: "Table de Dates",
        [_.manageDatesDatesTableReferenceDesc]: "Voici une table cachée contenant toutes les fonctions DAX nécessaires à la génération des dates.",
        [_.manageDatesDatesTableReferenceName]: "Table de définition des Dates",
        [_.manageDatesHolidaysDesc]: "Ajouter les jours fériés à votre modèle. Bravo créera les tables requises ou les mettra à jour sans toucher aux relations existantes. ",
        [_.manageDatesHolidaysEnabledDesc]: "Ajouter la table des jours fériés à votre modèle.",
        [_.manageDatesHolidaysEnabledName]: "Jours fériés",
        [_.manageDatesHolidaysTableDefinitionDesc]: "Voici une table cachée contenant toutes les fonctions DAX nécessaires à la génération des jours fériés.",
        [_.manageDatesHolidaysTableDefinitionName]: "Table de définition des Jours fériés",
        [_.manageDatesHolidaysTableDesc]: "Voici la table à utiliser dans les rapports pour les jours fériés.",
        [_.manageDatesHolidaysTableName]: "Table des Jours fériés",
        [_.manageDatesIntervalDesc]: "Sélectionner un intervalle de dates pour votre modèle.",
        [_.manageDatesISOCountryDesc]: "",
        [_.manageDatesISOCountryName]: "Pays relatif aux jours fériés",
        [_.manageDatesISOCustomFormatDesc]: "Saisir un format régional utilisant la balise de langage IETF BCP 47. Ex. fr-FR",
        [_.manageDatesISOCustomFormatName]: "Format personnalisé",
        [_.manageDatesISOFormatDesc]: "Choisir le format régional pour les dates.",
        [_.manageDatesISOFormatName]: "Format Régional",
        [_.manageDatesISOFormatOther]: "Autres...",
        [_.manageDatesISOFormatOtherPlaceholder]: "Région",
        [_.manageDatesMenuCalendar]: "Calendrier",
        [_.manageDatesMenuDates]: "Dates",
        [_.manageDatesMenuHolidays]: "Jours Fériés",
        [_.manageDatesMenuInterval]: "Intervalle",
        [_.manageDatesMenuPreviewCode]: "Expression",
        [_.manageDatesMenuPreviewModel]: "Changements du Modèle",
        [_.manageDatesMenuPreviewTable]: "Données de Test",
        [_.manageDatesMenuPreviewTreeDate]: "Dates",
        [_.manageDatesMenuPreviewTreeDateHolidays]: "Dates & Jours Fériés",
        [_.manageDatesMenuPreviewTreeTimeIntelligence]: "Time Intelligence",
        [_.manageDatesMenuTimeIntelligence]: "Time Intelligence",
        [_.manageDatesModelCheck]: "Vérification du Modèle",
        [_.manageDatesPreview]: "Visualiser",
        [_.manageDatesPreviewCtrlTitle]: "Visualiser les changements",
        [_.manageDatesSampleData]: "Données de test",
        [_.manageDatesSampleDataError]: "Impossible de générer des données de test.",
        [_.manageDatesStatusCompatible]: `<div class="hero">Ce modèle contient déjà certaines <b>tables de dates compatibles</b> avec Bravo.</div>Si vous faites des modifications, ces tables seront mises à jour et leurs relations resteront inchangées.`,
        [_.manageDatesStatusError]: `<div class="hero">Les changements actuels ne peuvent pas être appliqués.</div>{error}`,
        [_.manageDatesStatusIncompatible]: `<div class="hero">Ce modèle contient certaines <b>tables de dates non compatibles</b> avec Bravo.</div>Pour faire des modifications, il faudrait choisir un libellé différent pour une ou plusieurs tables qui seront créées par cet outil.<br><br>Vérifier les <b>Dates</b> et <b>Jours Fériés</b>.`,
        [_.manageDatesStatusNotAvailable]: `<div class="hero">Ce modèle n'est plus disponible.</div> Essayer de redémarrer l'application.`,
        [_.manageDatesStatusOk]: `<div class="hero">Ce modèle <b>est compatible avec la fonctionnalité de gestion des dates</b>.</div>Vous pouvez créer de nouvelles tables de dates sans risquer de casser des mesures ou des rapports.`,
        [_.manageDatesSuccessSceneMessage]: "Félicitations, votre modèle a été mis à jour avec succès.",
        [_.manageDatesTemplateFirstDayOfWeek]: "Premier Jour de la Semaine",
        [_.manageDatesTemplateFirstDayOfWeekDesc]: "Pour respecter l'ISO Hebdomadaire, sélectionnez <em>Lundi</em>.",
        [_.manageDatesTemplateFirstFiscalMonth]: "Premier Mois de l'Année",
        [_.manageDatesTemplateFirstFiscalMonthDesc]: "Pour respecter l'ISO Mensuel, sélectionnez <em>Janvier</em>.",
        [_.manageDatesTemplateMonthsInYear]: "Mois dans l'Année",
        [_.manageDatesTemplateMonthsInYearDesc]: "",
        [_.manageDatesTemplateNameConfig01]: "Standard",
        [_.manageDatesTemplateNameConfig02]: "Mensuel",
        [_.manageDatesTemplateNameConfig03]: "Personnalisé",
        [_.manageDatesTemplateNameConfig04]: "Hebdomadaire",
        [_.manageDatesTemplateQuarterWeekType]: "Système Hebdomadaire",
        [_.manageDatesTemplateQuarterWeekTypeDesc]: "",
        [_.manageDatesTemplateTypeStartFiscalYear]: "Premier Jour de l'Année Fiscale",
        [_.manageDatesTemplateTypeStartFiscalYearDesc]: "Pour respecter l'ISO Hebdomadaire, sélectionnez <em>Dernier de l'Année</em>.",
        [_.manageDatesTemplateTypeStartFiscalYearFirst]: "Premier de l'Année",
        [_.manageDatesTemplateTypeStartFiscalYearLast]: "Dernier de l'Année",
        [_.manageDatesTemplateWeeklyType]: "Dernier jour de semaine de l'année",
        [_.manageDatesTemplateWeeklyTypeDesc]: "Si votre semaine commence le Dimanche, le dernier jour de la semaine est Samedi. Si vous choisissez <em>Dernier de l'année</em>, l'année fiscale se termine le dernier Samedi du dernier mois. Sinon, l'année fiscale se termine le samedi le plus proche du dernier jour du dernier mois - cela pourrait être l'année suivante. Pour respecter l'ISO Hebdomadaire, définissez <em>Le plus proche de la fin de l'année</em>.",
        [_.manageDatesTemplateWeeklyTypeLast]: "Dernier de l'Année",
        [_.manageDatesTemplateWeeklyTypeNearest]: "Le plus proche de la fin d'Année",
        [_.manageDatesTimeIntelligenceDesc]: "Créez les fonctions les plus communes de Time Intelligence DAX disponible dans votre modèle.",
        [_.manageDatesTimeIntelligenceEnabledDesc]: "",
        [_.manageDatesTimeIntelligenceEnabledName]: "Fonctions de Time Intelligence",
        [_.manageDatesTimeIntelligenceTargetMeasuresAll]: "Toutes les Mesures",
        [_.manageDatesTimeIntelligenceTargetMeasuresChoose]: "Choisir les Mesures...",
        [_.manageDatesTimeIntelligenceTargetMeasuresDesc]: "Choisir la mesure utilisée dans la génération des fonctions de Time Intelligence.",
        [_.manageDatesTimeIntelligenceTargetMeasuresName]: "Mesures Cibles",
        [_.manageDatesYearRange]: "Intervalle de Dates",
        [_.manageDatesYearRangeDesc]: "Choisir comment déterminer l'intervalle de dates du modèle. Laisser à vide la <em>Première Année</em> et/ou <em>Dernière Année</em> pour lancer le scan automatique.",
        [_.menuCtrlTitle]: "Réduire/Développer le menu",
        [_.minimizeCtrlTitle]: "Minimiser",
        [_.modelLanguage]: "Langage du Modèle ({culture})",
        [_.more]: "Plus",
        [_.notificationCtrlTitle]: "Notifications",
        [_.notificationsTitle]: "{count} notification{{s}}",
        [_.openSourcePayoff]: "{appName} est un outil open-source tool développé et maintenu par SQLBI et la communité Github. Rejoignez-nous sur",
        [_.openWithDaxFormatterCtrlTitle]: "Formater en ligne avec DAX Formatter",  
        [_.optionAccount]: "Compte Power BI",
        [_.optionAccountDescription]: "Définir le compte pour accéder aux jeux données en ligne de Power BI.",
        [_.optionDiagnostic]: "Niveau de Diagnostique",
        [_.optionDiagnosticDescription]: "Afficher les erreurs et les journaux d'exécution dans le panneau de diagnostique. Choisir <em>Basic</em> de journaliser uniquement quelques messages. <em>Afficher</em> tous les messages des journaux d'exécution.",
        [_.optionDiagnosticLevelBasic]: "De base",
        [_.optionDiagnosticLevelNone]: "Aucun",
        [_.optionDiagnosticLevelVerbose]: "Afficher",
        [_.optionDiagnosticMore]: "Pour remonter un problème applicatif, merci d'utiliser",
        [_.optionFormattingBreaks]: "Rupture Libellé-Expression",
        [_.optionFormattingBreaksAuto]: "Automatique",
        [_.optionFormattingBreaksDescription]: "Choisir comment séparer le libellé de la mesure et l'expression. Sélectionner <em>Automatique</em> pour déterminer automatiquement le style utilisé dans le modèle.",
        [_.optionFormattingBreaksInitial]: "Saut de Ligne",
        [_.optionFormattingBreaksNone]: "Même Ligne",
        [_.optionFormattingLines]: "Lignes",
        [_.optionFormattingLinesDescription]: "Choisir de garder les lignes courtes ou longues.",
        [_.optionFormattingLinesValueLong]: "Lignes longues",
        [_.optionFormattingLinesValueShort]: "Lignes courtes",
        [_.optionFormattingPreview]: "Aperçu automatique",
        [_.optionFormattingPreviewDescription]: "Envoyez automatiquement des mesures à DAX Formatter pour générer des aperçus.",
        [_.optionFormattingSeparators]: "Séparateurs",
        [_.optionFormattingSeparatorsDescription]: "Choisir les séparateurs pour les nombres et les listes.",
        [_.optionFormattingSeparatorsValueAuto]: "Automatique",
        [_.optionFormattingSeparatorsValueEU]: "A; B; C; 1234,00",
        [_.optionFormattingSeparatorsValueUS]: "A, B, C, 1234.00",
        [_.optionFormattingSpaces]: "Espacement",
        [_.optionFormattingSpacesDescription]: "Gérer les espaces après les noms de fonctions.",
        [_.optionFormattingSpacesValueBestPractice]: "Bonnes pratiques",
        [_.optionFormattingSpacesValueFalse]: "Pas d'espace - SI( ",
        [_.optionFormattingSpacesValueTrue]: "Espace - SI ( ",
        [_.optionLanguage]: "Langage",
        [_.optionLanguageDescription]: "Choisissez la langue de Bravo. Redémarrage requis.",
        [_.optionLanguageResetConfirm]: "Voulez-vous redémarrer Bravo pour appliquer la nouvelle langue?",
        [_.optionsDialogAboutMenu]: "A propos",
        [_.optionsDialogFormattingMenu]: "Mise en page",
        [_.optionsDialogGeneralMenu]: "Général",
        [_.optionsDialogTelemetryMenu]: "Diagnostique",
        [_.optionsDialogTitle]: "Options",
        [_.optionTelemetry]: "Télémétrie",
        [_.optionTelemetryDescription]: "Envoyer des données d'utilisation anonymes à SQLBI.",
        [_.optionTelemetryMore]: "Aidez-nous à comprendre comment vous utilisez Bravo et comment l'améliorer. Aucune donnée personnelle n'est collectée. Veuillez noter que si cette option est désactivée, l'équipe de développement ne pourra pas collecter les erreurs non gérées et fournir des informations ou une assistance supplémentaires.",
        [_.optionTheme]: "Thème",
        [_.optionThemeDescription]: "Définissez le thème de Bravo. Laissez <em>Système</em> pour laisser le système d'exploitation choisir.",
        [_.optionThemeValueAuto]: "Système",
        [_.optionThemeValueDark]: "Sombre",
        [_.optionThemeValueLight]: "Clair",
        [_.otherColumnsRowName]: "Petites colonnes...",
        [_.paste]: "Coller",
        [_.powerBiObserving]: "En attente de l'ouverture du fichier dans Power BI Desktop...",
        [_.powerBiObservingCancel]: "Annuler",
        [_.powerBiSigninDescription]: "Connectez-vous au service Power BI pour connecter Bravo à vos jeux de données en ligne.",
        [_.powerBiSigninTitle]: "Power BI",
        [_.quickActionAttachPBITitle]: "Attacher à Power BI Desktop",
        [_.quickActionConnectPBITitle]: "Se connecter à Power BI Service",
        [_.quickActionOpenVPXTitle]: "Ouvrir un fichier Vertipaq Analyzer",
        [_.refreshCtrlTitle]: "Actualiser",
        [_.refreshPreviewCtrlTitle]: "Actualiser l'aperçu",
        [_.saveVpaxCtrlTile]: "Sauvegarder en tant que VPAX",
        [_.savingVpax]: "Génération de VPAX...",
        [_.sceneUnsupportedReason]: "Cette fonctionnalité n'est pas disponible pour cette source de données.",
        [_.sceneUnsupportedReasonManageDatesAutoDateTimeEnabled]: `Les modèles avec l'option de date/heure automatique activée ne sont pas pris en charge.<br><span class="link" href="https://www.sqlbi.com/tv/disabling-auto-date-time-in-power-bi/">Désactivation de la date et de l'heure automatiques dans Power BI (vidéo)</span>`,
        [_.sceneUnsupportedReasonManageDatesEmptyTableCollection]: "Cette fonctionnalité n'est prise en charge que par les bases de données qui ont au moins une table.",
        [_.sceneUnsupportedReasonManageDatesPBIDesktopModelOnly]: "Cette fonctionnalité est prise en charge uniquement par les modèles en mode Power BI Desktop.",
        [_.sceneUnsupportedReasonMetadataOnly]: "La base de données a été générée à partir d'un fichier VPAX qui ne comprend que ses métadonnées.",
        [_.sceneUnsupportedReasonReadOnly]: "La connexion à cette base de données est en lecture seule.",
        [_.sceneUnsupportedReasonXmlaEndpointNotSupported]: "Le point de terminaison XMLA n'est pas pris en charge pour ce jeu de données.",
        [_.sceneUnsupportedTitle]: "Non supporté",
        [_.searchColumnPlaceholder]: "Rechercher Colonne",
        [_.searchDatasetPlaceholder]: "Rechercher Jeu de données",
        [_.searchEntityPlaceholder]: "Rechercher Table/Colonne",
        [_.searchMeasurePlaceholder]: "Rechercher Mesure",
        [_.searchPlaceholder]: "Rechercher",
        [_.searchTablePlaceholder]: "Rechercher Table",
        [_.settingsCtrlTitle]: "Options",
        [_.sheetOrphan]: "Non disponible",
        [_.sheetOrphanPBIXTooltip]: "Le rapport a été fermé dans Power BI Desktop. Toute opération d'écriture est interdite.",
        [_.sheetOrphanTooltip]: "Ce modèle n'est plus disponible. Toute opération d'écriture est interdite.",
        [_.showDiagnosticPane]: "Afficher les Détails",
        [_.sideCtrlTitle]: "Basculer la vue côte à côte",
        [_.signedInCtrlTitle]: "Connecté en tant que {name}",
        [_.signIn]: "Se connecter",
        [_.signInCtrlTitle]: "Se connecter",
        [_.signOut]: "Se déconnecter",
        [_.sqlbiPayoff]: "Bravo est un projet de SQLBI.",
        [_.syncCtrlTitle]: "Synchroniser",
        [_.tableColCardinality]: "Cardinalité",
        [_.tableColCardinalityTooltip]: "Nombre d'éléments uniques",
        [_.tableColColumn]: "Colonne",
        [_.tableColColumns]: "Colonnes",
        [_.tableColMeasure]: "Mesure",
        [_.tableColPath]: "Table \\ Colonne",
        [_.tableColRows]: "Lignes",
        [_.tableColSize]: "Taille",
        [_.tableColTable]: "Table",
        [_.tableColWeight]: "Poids",
        [_.tableSelectedCount]: "{count} Sélectionnés",
        [_.tableValidationInvalid]: "Ce libellé ne peut pas être utilisé.",
        [_.tableValidationValid]: "Ce libellé est valide.",
        [_.themeCtrlTitle]: "Changer le Thème",
        [_.toggleTree]: "Basculer l'arborescence",
        [_.traceId]: "Identifiant de suivi",
        [_.unknownMessage]: "Message non valide reçu",
        [_.updateChannelBeta]: "Bêta",
        [_.updateChannelCanary]: "Canari",
        [_.updateChannelDev]: "Dev",
        [_.updateChannelStable]: "Stable", 
        [_.updateMessage]: "Une nouvelle version de Bravo est disponible: {version}",
        [_.validating]: "Validation...",
        [_.version]: "Version",
        [_.welcomeHelpText]: "Regardez les vidéos ci-dessous pour apprendre à utiliser Bravo:",
        [_.welcomeHelpTitle]: "Comment utiliser Bravo?",
        [_.welcomeText]: "Bravo est une boîte à outils Power BI pratique que vous pouvez utiliser pour analyser vos modèles, formater des mesures, créer des tables de dates et exporter des données.",
        [_.whitespacesTitle]: "Espaces blancs",
        [_.wrappingTitle]: "Retour à la ligne automatique",
    }
}
export default locale;