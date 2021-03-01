import $ from 'jquery'
import '/css/app2.css'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click','li',(e)=>{
    // 获取点击的是哪个元素 会获取到最里面的那个元素 e.target
    // 获取点击的是哪个元素 会获取到当前点击的 e.currentTarget
    const $li = $(e.currentTarget)
    const index = $li.index()
    // 对bar进行css修改
    $li.addClass('select')
    .siblings()
    .removeClass('select')
    //对content进行切换控制
    $tabContent.children()
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
})