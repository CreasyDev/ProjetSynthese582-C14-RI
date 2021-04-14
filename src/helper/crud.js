// Module permettant de faire la lecture, l'écriture, la lecture,
// la suppression et la mise à jours des fichiers json.

// Importation de la liste des utilisateurs du fichier json.
import utilisateurs from "../data/utilisateurs";
// Importation des listes demandes et offres de stage du fichier json.
import jobs from "../data/jobs";

// DÉBUT OPERATION CRUD SUR LE FICHIER JSON DES UTILISATEURS

// Fonction permettant de récuperer la liste des utilisateurs pour en faire la lecture après
export const recupererDonneesUtilisateurs = () => {
  if (localStorage.getItem("utilisateurs") !== null) {
    // Les données utilisateurs existent dans le localStorage.

    // Récupération des données utilisateurs du localStorage.
    return JSON.parse(localStorage.getItem("utilisateurs"));
  } else {
    // Les données utilisateurs n'existent pas dans le localStorage,
    // donc nous sauvegardons la liste initiale des utilisateurs dans le localStorage
    // PS: Nous sauvegardons la liste initiale des utilisateurs dans le localStorage afin de pouvoir écrire, modifier et supprimer des utilisateurs temporairement.
    // Sinon, on pourra pas écrire, modifier ou supprimer directement dans un fichier json stocké localement (au niveau du navigateur).
    // Le navigateur web nous permet pas cela à cause des raisons de sécurité.

    // Sauvegarde des données utilisateurs dans le localStorage.
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
    return utilisateurs;
  }
};

// Fonction permettant d'ajouter un nouvel utilisateur
export const ajouterUtilisateur = (nouvelleUtilisateur) => {
  // si le paramètre 'nouvelleUtilisateur' est indefini, on quitte immédiatement la fonction
  if (!nouvelleUtilisateur) return false;

  let utilisateurs_temp = JSON.parse(localStorage.getItem("utilisateurs"));
  const nouvelle_liste_utilisateurs = utilisateurs_temp.push(
    nouvelleUtilisateur
  );
  // mis à jour de la liste des utilisateurs dans le localStorage
  localStorage.setItem(
    "utilisateurs",
    JSON.stringify(nouvelle_liste_utilisateurs)
  );
  return nouvelle_liste_utilisateurs;
};

// Fonction permettant de supprimer un utilisateur
export const supprimerUtilisateur = (utilisateurId) => {
  // si le paramètre 'utilisateurId' est indefini, on quitte immédiatement la fonction
  if (!utilisateurId) return false;

  const utilisateurs_temp = JSON.parse(localStorage.getItem("utilisateurs"));
  const nouvelle_liste_utilisateurs = utilisateurs_temp.filter(function (item) {
    return item.id !== utilisateurId;
  });
  // mis à jour de la liste des utilisateurs dans le localStorage
  localStorage.setItem(
    "utilisateurs",
    JSON.stringify(nouvelle_liste_utilisateurs)
  );
  return nouvelle_liste_utilisateurs;
};

// Fonction permettant de modifier un utilisateur
export const modifierUtilisateur = (utilisateurId, utilisateurModifie) => {
  // Le paramètre 'utilisateurModifie' contient les données de l'utilisateur modifié.
  // Si le paramètre 'utilisateurId' ou 'utilisateurModifie' est indefini, on quitte immédiatement la fonction.

  if (!utilisateurId || !utilisateurModifie) return false;

  let utilisateurs_temp = JSON.parse(localStorage.getItem("utilisateurs"));
  const utilisateurModifieComplete = {
    ...utilisateurs_temp[utilisateurId - 1],
    ...utilisateurModifie,
  };

  // retrait de l'utilisateur modifié de la liste temporairement
  const nouvelle_liste_utilisateurs = utilisateurs_temp.filter(function (item) {
    return item.id !== utilisateurId;
  });

  // const utilisateurs_liste_modifiee = Object.assign([], utilisateurModifieComplete, nouvelle_liste_utilisateurs)
  // mis à jour de la liste des utilisateurs dans le localStorage
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs_temp));
  return true;
};

// FIN OPERATION CRUD SUR LE FICHIER JSON DES UTILISATEURS

// export default messages;
