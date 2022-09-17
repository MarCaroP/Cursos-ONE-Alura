export class SistemaAutentificacion{
    static login(usuario,clave){
        //console.log(clave); devuelve el parameto
        //console.log(empleado.clave); devuelve la clave que se le asigno al empleado o en primer caso, le devolvio la funcion ya que no habia hecho la funcion de get de clave en empleado
       // return usuario.autenticable(clave);
        if("autenticable" in usuario && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        else
            return false;
        
    }
}