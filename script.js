const food={
    'Sweet BabyCorn':149,
    'Chicken Tikka':299,
    'Paneer Tikka':259,
    'Veg Manchurian':199,
    'Paneer Butter Masala':259,
    'Mushroom Chana':279,
    'Chicken Butter Masala':299,
    'Rotiyon ki Tokri':89,
    'Gulab Jamun':39,
    'Tutti Frutti':89,
    'Choco Lava Cake':99,
    'Mango Sorbet':89
    
}
let price_tot=0;




document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button')
    buttons.forEach(function (button) {
        button.addEventListener('click', success)
    })
    function success(event) {
        var x = document.getElementById(event.target.id)
        x.style.backgroundColor = 'lightgreen'
        x.innerText = 'Added'
        var table=document.getElementById('myTable').getElementsByTagName('tbody')[0]
        var row= table.insertRow(table.rows.length)
        var item= row.insertCell(0)
        var qty= row.insertCell(1)
        var price_col= row.insertCell(2)
        for (const key in food) {
            if (key== event.target.id){
                var price= food[key] 
                price_tot+= price
            }
        } 
        item.innerHTML= event.target.id
        qty.innerHTML= '1'
        price_col.innerHTML= price;
        document.getElementById('tot_price').innerHTML= price_tot
    }
})
