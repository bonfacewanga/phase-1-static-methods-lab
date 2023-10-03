class Formatter {
  //add static methods here
 
  static capitalize(string){
    let arr = string.split('')
      let capital = arr[0].toUpperCase()
        arr.shift()
        arr.unshift(capital)

        return arr.join('')
  }

  static sanitize(string){
    let finder = string.replace((/[^\w\s'-]/g),"")

    return finder
  }
  static titleize(string){
    let arr = string.split(' ')
    let exceptions = ["the","a","an","but","of","and","for","at","by","from"]

          for(let i = 0;i < arr.length; i++){

            arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)

            exceptions.forEach(item => { if(arr[i].toLowerCase() === item )
                  return arr[i] = item
                }
              )
            
          } 
          return this.capitalize(arr.join(' '))
 }
}
