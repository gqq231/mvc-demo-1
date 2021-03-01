import $ from 'jquery'
import '/css/app4.css'

const  $circle = $("#app4 .circle")

$circle.on('mouseenter',()=>{
    $circle.addClass('active')
})

$circle.on('mouseleave',()=>{
    $circle.removeClass('active')
})