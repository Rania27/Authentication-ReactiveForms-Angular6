// class holding custom validation.

export class Custom {
// méthode statique: pour le control : exemple vérifier que email unique
static unique(control) {
 const db = ['rania']
    if (db.indexOf(control.value) !== -1)
    return { unique : false}
return null;
}

}