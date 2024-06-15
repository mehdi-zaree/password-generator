const input = document.getElementById('password')
const generation = ()=>{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789!@#$%^&*()-_+=|<>{}[]"
    let result = ""

    console.log(result);
    for(i=0;i<13;i++){
        result += chars[Math.floor(Math.random()* chars.length)]
    }
    input.value=result
}
const copy = ()=>{
    input.select()
    document.execCommand('copy')
    alert('copied')
    input.value = ''

}
