/**
* @param {Object}   args - Pode receber um Array
* @param {Vector2}  args - Pode receber um Vector2
* @param {number}   args - Pode receber dois numeros
* @param {number}   args - Pode receber um numero
*/
export class Vector2{

    constructor(...args){

        //Se os valores forem passados separadamente
        if(args.length === 2){
            this.x = args[0]
            this.y = args[1]
            return
        }

        //Se os valores forem passados em um array
        if(typeof(args[0]) === 'object' && args[0].x === undefined){
            this.x = args[0][0]
            this.y = args[0][1]
            return
        }

        //Se os valores forem passados em um Vector2
        if(typeof(args[0]) === 'object' && args[0].x !== undefined){
            this.x = args[0].x
            this.y = args[0].y
            return
        }

        //Se o valor passado for um numero unico
        if(typeof(args[0]) === 'number' && args.length == 1){
            this.x = args[0];
            this.y = args[0];
            return
        }

    }

    /**
    * @returns {Vector2} - Retorna um Novo Vector2 com valor inicial 0,0 
    */
    static zero(){

        return new Vector2(0, 0);   

    }

    /** 
    * @param {Vector2} target - Vector2 a medir a distancia 
    * @returns {number} - Number
    */
    distance(target){
        return Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2));
    }

    setMagnitude(maxMagnitude){

        let currentMagnitude = this.length();

        if (currentMagnitude > maxMagnitude) {
            const scaleFactor = maxMagnitude / currentMagnitude;
            this.x *= scaleFactor;
            this.y *= scaleFactor;
          }

    }

    /**
    * @returns {number} - Number
    */
    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
    * @returns {Vector2} - Retorna um novo Vector2 normalizado 
    */
    normalize(){
        let len = this.length()
        return new Vector2(this.x / len, this.y / len);
    }

    /** 
    * @param {number} angle - number
    */
    pointTo(angle){

        let x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        let y = this.x * Math.sin(angle) + this.y * Math.cos(angle);

        return new Vector2(x, y)

    }

    copy(){
        return new Vector2(this.x, this.y);
    }

    /** 
    * @param {Vector2} vector - Vector2 
    * @returns {Vector2}      - new Vector2 
    */
    add(vector){
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }

    /** 
    * @param {number} number - Number 
    * @returns {Vector2}     - new Vector2 
    */
    mult(number){
        return new Vector2(this.x * number, this.y * number);
    }

    /** 
    * @param {number} number - Number 
    * @returns {Vector2}     - new Vector2 
    */
    sub(vector){
        return new Vector2(this.x - vector.x, this.y - vector.y);
    }
    
    div(vector){
        return new Vector2(this.x / vector.x, this.y / vector.y);
    }

}