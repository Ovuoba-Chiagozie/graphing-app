
// let ipt = document.getElementById('ipt')
// let btn = document.getElementById('btn')
let maindiv = document.getElementById('main_div')
let menucover =document.getElementById('menu-cover')
let firstbtn = document.getElementById('firstbtn')
let graph_counter =0
let tab_counter = -1
let indexofForm = -1
let line_counter_array = []
let xAxis= []
let yAxis = []
let returnbtn = []
let call_tab_once;
let graph_tab_once;



firstbtn.onclick = () => {

   testbtn()

}
 
let testbtn = ()=> {

   line_counter_array.push(0)
   let info =` 

   <li class="menu-item"  >

   <div class="ct bg">

   <span class="material-symbols-outlined returndrop pl" style="display:none">expand_more</span>

   <span class="material-symbols-outlined expand pl"  style="display: none;">chevron_right</span>

   <span class="btn1 graph_name" >Graph ${graph_counter += 1}</span>

   <img src="./plus.png" alt="plus-sign" class="create_new_graphsheet_iconbtn graph"  >

   </div>

   <div class="menu-item-sub line_drop_down">
    
   </div>

   </li>`

   menucover.style.cssText += 'height:100%'
   maindiv.insertAdjacentHTML('beforeend', info)
   tabdisplay()
   graphdropdownfunc()
   expandgraph()
   returndropgraph()
   createinput()
   createinputline()
   returnbtn.push('')

}

let tabdisplay = () => {

   let tabdiv = document.getElementById('tab_div')
   let graphdiv = document.getElementsByClassName('graph_container_div')
   let tabname = document.getElementsByClassName('graph_name')


   tabdiv.insertAdjacentHTML('beforeend', `<div class="tab">${tabname[tab_counter += 1].innerText}</div>`)
   let idiot = tabdiv.children
   tabonce(idiot)
   let dynamicwidth =(100/tabdiv.children.length)
   let tabclass = document.getElementsByClassName('tab')
   let tabs = Array.from(tabclass)
  
   tabs.forEach(tab => {
      console.log('ahh')
     tab.style.cssText += `width:${dynamicwidth}%;height:18px;font-size:14px;text-align:center`

   })

   graphdiv[0].insertAdjacentHTML("beforeend",
   `<div class="active">

    <div class="scales">

    <p>Scale for X-axis:

    <input type="text" class="x_scale_cm_input" >

    cm | 

    <input type="text" class="x_scale_units_input" >

    units

    <small></small>

    <small></small>

    </p>

    <p>Scale for Y-axis:

    <input type="text" name="" class="y_scale_cm_input" >

    cm | 

    <input type="text" class="y_scale_units_input">

    units

    <small></small>

    <small></small>

    </p>

    </div>

    <div class="flex">

    <div class="firstgraph"></div>

    </div>

    </div>`)

   let graph1 = graphdiv[0].children
   graphtabonce(graph1)
  //  let grapharea = Array.from(graph1)
   tabs.forEach((tab,index) => {

     tab.addEventListener('click',function(event) {

     for (let rmvtab of tabclass) {

       rmvtab.classList.remove('active_tab')

     }

     for (area of graph1) {

       area.classList.remove('active_container')

     }

      tab.classList.add('active_tab')
      graph1[index].classList.add('active_container')
      event.stopImmediatePropagation()
     })

   })

   xAxis.push([])
   yAxis.push([])

}

let tabonce = (idiot) => {

   if (!call_tab_once) {

     call_tab_once = true;
     idiot[0].classList.add('active_tab')
   
   }
}

let graphtabonce = (graph1) => {

   if (!graph_tab_once) {
     graph_tab_once = true;
     graph1[0].classList.add('active_container')
   
   }
}

let graphdropdownfunc = () => {

   let graphdropdown = document.querySelectorAll('.graph')

   graphdropdown.forEach((graph,index) => {
     
     graph.addEventListener('click', function(event) {

       displayline(index)
       linedropdown(index)
       createinputline()  
       event.stopImmediatePropagation() 

     })
      
   })
 
}

let displayline = (index) => {

   let graphreturnbtn = document.getElementsByClassName('returndrop') 
   let graphname = document.getElementsByClassName('graph_name')
   let linedropdown = document.querySelectorAll('.line_drop_down')
   let no =  line_counter_array[index] += 1

   let info = `
   <div class="ct">

   <span class="material-symbols-outlined pl iconbtn" >expand_more</span>

   <span class="material-symbols-outlined pl iconbtn1"  style="display: none;">chevron_right</span>

   <span class="line">Line ${no}</span>

   </div>

   <div class="container_form form">

   <div class="bd">

   <p class="padding_of_p tp"> Highest power of x = </p> 

   <div class="input-div">

   <input type="text" class="highest_X_power_input"> 

   </div> 

   <div class="constant_of_x"></div>

   </div>

   </div>`

   linedropdown[index].style.cssText += 'max-height:100em'
   linedropdown[index].insertAdjacentHTML('beforeend',info)
   returndrop(graphreturnbtn,index)
   graphname[index].style.cssText += "padding-left:25px"

}

let returndrop = (graphreturnbtn,index) => {

   if (!returnbtn[index]) {

     returnbtn[index] = true;
     graphreturnbtn[index].style.cssText += 'display:inline-block'
   
   }
}

let linedropdown = (index) => {
 
   let tabindex = index
   let iconbtn = document.querySelectorAll('.iconbtn')
   let formdropdown = document.querySelectorAll('.form')
   let iconbtn1 = document.querySelectorAll('.iconbtn1')

   iconbtn.forEach ((icon,index) => {
  
     icon.addEventListener('click', function() {
  
       formdropdown[index].style.cssText += 'max-height:100em;'
       icon.style.cssText += 'display:none'
       iconbtn1[index].style.cssText += 'display:inline-block'
       inputbtn(tabindex,index)
    
     })

   })

   iconbtn1.forEach((icon,index) => {

     icon.addEventListener('click',function() {

       formdropdown[index].style.cssText += 'transition: max-height 0.3s; max-height:0'
       icon.style.cssText += 'display:none'
       iconbtn[index].style.cssText += 'display:inline-block'

     })

   })

}

let inputbtn =(tabindex,lineindex) => {
   
   let   inputclass = document.querySelectorAll('.highest_X_power_input')

   inputclass.forEach((input,index) => {

     input.addEventListener('keyup', function(event) {
    
       input.focus()
       xpowerdisplay(input,index,tabindex,lineindex)
       event.stopImmediatePropagation()

     })
 
   })

}

let xpowerdisplay = (input1,index,tabindex,lineindex) => {
  
   let constants = document.querySelectorAll('.constant_of_x')
   let btnindex = index
   let inputarray =[]
   let c = Number(input1.value)

   if (c !== 0) { 

     for (let i = c; i >-1; i--) {

       inputarray.push(i)
            
     }

    }
       
   let html =  inputarray.map(power => {

     let info
     info =  `
     <p class="padding_of_p">

     constant of X <sup>${power}</sup> 

     </p>

     <input type="text" name="input_constant"  class="constant_input">

     <small></small> `
    
     if (power == 1) {
    
       info =`
       <p class="padding_of_p pr">

       constant of X 

       </p>

       <input type="text" name="input_constant"  class="constant_input mt">

       <small></small>` 

     }
    
     if (power == 0) {

       info =  `
       <p class="padding_of_p pr">

       constant of C

       </p>

       <input type="text" name="input_constant"  class="constant_input mt">

       <small></small>`

     }
    
     return info

     })

   constants[index].innerHTML = `
   ${html.join('')}
   
   <button type="button" class="button1">
   
   Done

   </button>
   
   <div class="x_equation"></div>`
   let donebtn1 = document.getElementsByClassName('button1')
   let donebtn = Array.from(donebtn1)

   donebtn.forEach((done,index) => {

     done.addEventListener('click',function() {

       let isformvalid = checkinputfields(index)
       if (isformvalid === true) {
       
         getconstant(btnindex,inputarray,index,tabindex,lineindex)
  
       }

     })

   })

   return inputarray

}

let getconstant =  (constindex, inputarray,index,tabindex,lineindex) =>  {
    
   let constants = document.getElementsByClassName('constant_of_x')
   let equationx = document.getElementsByClassName('x_equation')
   let constinput = constants[constindex].children
   let chart = inputarray
   let constinputarray = Array.from(constinput)
   let randomarray = []
   
   constinputarray.forEach(cnst => {

     randomarray.push(cnst.value)

   })
 
   let filtered_random = randomarray.filter(x => {

     return (x !== undefined && x!== '')

   })

   let equation = filtered_random.map( (filtered,index) => {
 
     let entry = chart[index]
     let firstindex = chart[0]
     let random = Number(filtered)
     let symbol = ''

     if (random < 0) {

       symbol = "-"
    
     }

     if (entry < firstindex) {
    
       symbol = "+"
    
     }

     if (random < 0) {

       symbol = "-"
    
     }

     let dontknow =  `${symbol}${Math.abs(random)}X<sup>${entry}</sup>`

     if (random < 0) {

       dontknow =  `${random}X<sup>${entry}</sup>`
  
     }

     if (entry == 0) {

       dontknow =  `${symbol}${Math.abs(random)}<sup></sup>`
  
     }

     if (entry == 1) {

       dontknow =  `${symbol}${Math.abs(random)}X<sup></sup>`
  
     }

     if (entry == 1 && random == 1) {

       dontknow =  `${symbol}X<sup></sup>`
  
     }

     if (entry == 1 && random == -1) {

       dontknow =  `${symbol}X<sup></sup>`
  
     }

     if( random == 1 && entry > 0 && entry > 1 ) {

       dontknow =  `${symbol}X<sup>${entry}</sup>`

     }

     if( random == -1 && entry > 0 && entry > 1 ){

       dontknow =  `${symbol}X<sup>${entry}</sup>`

     }

     if(random== 0) {
  
       dontknow =  ``

     }

     return dontknow

   })
  
   equationx[index].innerHTML=`
   <p class="padding_of_p wt">

   Equation: ${equation.join('')}
   
   <p class="wd" >

   how many values for your <br> x-axis
   
   </p>

   <input type="text" class="table_column_number pli">

   <button type="button" class="display_table button2" >

   calulate
   
   </button>
   
   <button class="draw_graph_btn button2" >
   
   draw
   
   </button>
   
   <button class="update_graph_btn button2">
   
   draw
   
   </button>
  
   </p>`
   let firstgraph =document.getElementsByClassName('firstgraph')
   let info =`
   <div class="table-div"> 

   <div class="x_y_column"></div>

   <table class="tables" >
   
   <tr class="row1"></tr>

   <tr class="row2"></tr>
   
   </table>

   </div>`
   firstgraph[tabindex].insertAdjacentHTML('beforebegin',info)
   let tabledisplay = document.getElementsByClassName('display_table')
   let displaytable = Array.from(tabledisplay)
            
   displaytable.forEach((table,index1) => {
             
     table.addEventListener('click', function() {
          
       getcolumno(index1,filtered_random,chart,tabindex,lineindex)

     })
              
   })

}

let getcolumno = (index1,constinput,chart,tabindex,lineindex) => {

   colu =document.getElementsByClassName('table_column_number')
   row1 = document.getElementsByClassName('row1')
   row2 = document.getElementsByClassName('row2')
   xycolumn = document.getElementsByClassName('x_y_column')
   result = document.getElementById('resultbtn')
   let columnarray =[]

   for (let index = Number(colu[index1].value); index > 0; index--) {
  
     columnarray.push(index)

   }

   let html1 = columnarray.map(column => {
      
     let info =`
     <td align="center">

     <input type="text" class="column_input">
  
     </td>`

     return info

   })

   let html2 = columnarray.map(column => {

     let info = `
     <td align="center">

     <p class="column_output"></p>

     </td>`

     return info

   })

   xycolumn[index1].innerHTML= `
   <table>
   
   <tr>
   
   <td align="center" >
   
   <p>X</p>
   
   </td>
   
   </tr>
   
   <tr>
   
   <td align="center" >
   
   <p>Y</p>
   
   </td>
   
   </tr>
   
   </table>`
   row1[index1].innerHTML = html1.join('')
   row2[index1].innerHTML = html2.join('')
   let column_input= document.getElementsByClassName('column_input')
   let columninput = Array.from(column_input)

   columninput.forEach((column,ind) => {

     column.addEventListener('keyup', function(event){

       getresult(column,constinput,chart,ind,tabindex,lineindex)
       event.stopImmediatePropagation()

     })

   })
}

let getresult = (column,constinput,chart,ind,tabindex,lineindex) => {

   let columnoutput = document.querySelectorAll('.column_output')
   let output = 0

   constinput.forEach((cnst, index)=> {

     let add = 0
     let power = chart[index]
     let c = Number(cnst)
     let d = Number(column.value)

     if (power == 0) {

       d = 1

     }

     add = (c*(d**power))
     output += add

   })

   columnoutput[ind].innerText = output
   displaygraph(tabindex,lineindex)

}

let displaygraph = (tabindex,lineindex) => {

   let drawgrapbtn = document.getElementsByClassName('draw_graph_btn')
   let drawbtn = Array.from(drawgrapbtn)
   let updateclass = document.getElementsByClassName('update_graph_btn')

   drawbtn.forEach((draw,index) => {

     draw.addEventListener('click', function(event) {
  
       let isformvalid = checkinputforscale(tabindex)
    
       if (isformvalid === true) {
    
         let axis = createarray(index)
         let xData = axis.xvalue
         let yData = axis.yvalue
         drawgraph(xData,yData,tabindex,index,lineindex)
         draw.style.cssText += 'display:none'
         updateclass[index].style.cssText += 'display:inline-block'
         updategraph(index,tabindex,lineindex)
         event.stopImmediatePropagation()

       }

     })

   })

}

let createarray = (index) => {

  let tables = document.getElementsByClassName('tables')
  let inputelements = tables[index].getElementsByTagName('input')
  let paraelements = tables[index].getElementsByTagName('p')
  let inputarray = []
  let pararray = []
  let inputloop = Array.from(inputelements)
  let paraloop = Array.from(paraelements)

  inputloop.forEach(input => {

    inputarray.push(Number(input.value))

  })

  paraloop.forEach(para => {

    pararray.push(Number(para.innerText))

  })

  return {
   
    xvalue: inputarray,
    yvalue: pararray

  }

}

let drawgraph = (xData,yData,tabindex,index,lineindex) => {

  let linenameindex = document.getElementsByClassName('line')
  let linenameclass = linenameindex[lineindex].parentElement.parentElement
  let linename = linenameclass.getElementsByClassName('line')
  let graph1 = document.getElementsByClassName('firstgraph')
  let xPlane = xAxis[tabindex]
  let yPlane = yAxis[tabindex]
  let data = [] 
  xPlane.push(xData)
  yPlane.push(yData)

   if (xPlane.length <= 1) {
    
      let trace1 = {
       x: xData,
       y: yData,
       type: 'scatter',
       line: {
         width:2,
         shape:'spline',
       },
       marker: {
         size:12,
       }
     }
       data.push(trace1)
     
   }
  
   else {
  
    for (let i = 0; i < xPlane.length; i++) {
      let trace1 = {
       x: xPlane[i],
       y: yPlane[i],
       type: 'scatter',
       name: linename[i].innerText,
       line: {
         width:2,
         shape:'spline',
         
       },
       marker: {
         size:12,
       }
     }
       data.push(trace1)

     }
  
   }

  let layout ={
  
    font: {
      size:10
    },
    margin: {
      l: 10,
      r: 10,
      b: 60,
      t: 10,
      pad: 40
    },
    legend:{
     itemwidth:30,
     xanchor:"right",
     x:1,
     y:1,
     font:{
      size:14
     }
     
  
    },
    xaxis: {
      tickmode:"linear",
      tick0:0,
      dtick:calulatescaleforX(tabindex),
      linecolor:"#000",
      gridcolor:"#FF0000",
      linewidth:4,
      ticks:"inside",
      anchor:'free',
      position: 0.5,
      margin: {
        l: 100,
        r: 100,
        b: 600,
        t: 100,
        pad: 400
      },
    },
    yaxis: {
      tickmode:"linear",
      tick0:0,
      dtick:calulatescaleforY(tabindex),
      linecolor:"#000",
      gridcolor:"#FF0000",
      linewidth:4,
      ticks:"inside",
      anchor:'free',
      position: 0.5,
      margin: {
        l: 100,
        r: 100,
        b: 600,
        t: 100,
        pad: 400
      },
    }
  }
  
  
  Plotly.newPlot(graph1[tabindex],data,layout)
  
  }
  
let calulatescaleforX = (tabindex) => {
   
   let Xscalecminput = document.getElementsByClassName('x_scale_cm_input')
   let Xscaleunitinput=document.getElementsByClassName('x_scale_units_input')
   let scalecm = Number(Xscalecminput[tabindex].value)
   let scaleunit = Number(Xscaleunitinput[tabindex].value)
   let scale
   scale = scaleunit/(scalecm*10)
   return scale

}

let calulatescaleforY = (tabindex) => {

   let Yscalecminput = document.getElementsByClassName('y_scale_cm_input')
   let Yscaleunitinput=document.getElementsByClassName('y_scale_units_input')
   let scalecm = Number(Yscalecminput[tabindex].value)
   let scaleunit = Number(Yscaleunitinput[tabindex].value)
   let scale
   scale = scaleunit/(scalecm*10) 
   return scale

  }

let updategraph = (index,tabindex,lineindex) => {

   let updateclass = document.getElementsByClassName('update_graph_btn')
   let updates = Array.from(updateclass)

   updates.forEach((updatebtn,index1) => {

     let tables = document.getElementsByClassName('tables')

     updatebtn.addEventListener('click', function(event) {

      let isformvalid = checkinputforscale(tabindex)
    
      if (isformvalid === true) {
    
         let axis = createarray(index)
         let xData = axis.xvalue
         let yData = axis.yvalue
         updatedraw(xData,yData,index1,tabindex,lineindex)
         event.stopImmediatePropagation()

      }

     })

   })

}

let updatedraw = (xData,yData,index,tabindex,lineindex) => {
   let tables = document.getElementsByClassName('tables')
   let linenameindex = document.getElementsByClassName('line')
   let linenameclass = linenameindex[lineindex].parentElement.parentElement
   let linename = linenameclass.getElementsByClassName('line')
   let parent = tables[index].parentElement
   let getindexof = parent.getElementsByClassName('tables')
   let updateindex = Array.from(getindexof).indexOf(tables[index])
   let graph1 = document.getElementsByClassName('firstgraph')
   let xPlane = xAxis[tabindex]
   let yPlane = yAxis[tabindex]
   let data = []
   xPlane[updateindex] = xData
   yPlane[updateindex] = yData

 if (xPlane.length <= 1) {
  
    let trace1 = {
     x: xData,
     y: yData,
     type: 'scatter',
     line: {
       width:2,
       shape:'spline',
     },
     marker: {
       size:12,
     }
   }
     data.push(trace1)
   
 }

 else {

  for (let i = 0; i < xPlane.length; i++) {
    let trace1 = {
     x: xPlane[i],
     y: yPlane[i],
     type: 'scatter',
     name: linename[i].innerText,
     line: {
       width:2,
       shape:'spline',
  
     },
     marker: {
       size:12,
     }
   }
     data.push(trace1)
   }

 }

let layout ={

  font: {
    size:10
  },
  margin: {
    l: 10,
    r: 10,
    b: 60,
    t: 10,
    pad: 40
  },
  legend:{
    itemwidth:30,
    xanchor:"right",
    x:1,
    y:1,
    font:{
     size:14
    }
    
  },
  xaxis: {
    tickmode:"linear",
    tick0:0,
    dtick:calulatescaleforX(tabindex),
    linecolor:"#000",
    gridcolor:"#FF0000",
    linewidth:4,
    ticks:"inside",
    anchor:'free',
    position: 0.5,
    margin: {
      l: 100,
      r: 100,
      b: 600,
      t: 100,
      pad: 400
    },
  },
  yaxis: {
    tickmode:"linear",
    tick0:0,
    dtick:calulatescaleforY(tabindex),
    linecolor:"#000",
    gridcolor:"#FF0000",
    linewidth:4,
    ticks:"inside",
    anchor:'free',
    position: 0.5,
    margin: {
      l: 100,
      r: 100,
      b: 600,
      t: 100,
      pad: 400
    },
  }
}



Plotly.newPlot(graph1[tabindex],data,layout)

}

let expandgraph = () => {
   let linedropdown = document.querySelectorAll('.line_drop_down')
   let expand = document.querySelectorAll('.expand')
   let returndrop = document.querySelectorAll('.returndrop')

   expand.forEach((exp,index) => {

     exp.addEventListener('click',function(){
     
       linedropdown[index].style.cssText += 'transition: max-height 0.3s;max-height:100em;'
       returndrop[index].style.cssText += 'display:inline-block'
       expand[index].style.cssText += 'display:none'
     
     })

   })
     
}

let returndropgraph = () => {
   let linedropdown = document.querySelectorAll('.line_drop_down')
   let returndrop = document.querySelectorAll('.returndrop')
   let expand = document.querySelectorAll('.expand')

   returndrop.forEach((droplines,index) => {

     droplines.addEventListener('click',function() {
     
       linedropdown[index].style.cssText += 'transition: max-height 0.1s;max-height:0;overflow:hidden'
       returndrop[index].style.cssText += 'display:none'
       expand[index].style.cssText += 'display:inline-block'
     
     })
 
   })
  
}

let createinput = () => {

   let graphname = document.querySelectorAll('.graph_name')
   let tabclass = document.getElementsByClassName('tab')

   graphname.forEach((dynamic,index) => {

     dynamic.addEventListener('dblclick',function(event){
      
       let value1 = dynamic.innerText
       let inputfield = document.createElement("input")
       inputfield.style.cssText =" width: 100px;height: 20px;border: 1px solid #2B2D31;border-radius: 2px;"
       inputfield.value = value1
       dynamic.innerText = ''
       dynamic.appendChild(inputfield)
       inputfield.focus()
       
       inputfield.onblur = (event1) => {

         let value2 = inputfield.value
         dynamic.innerText = value2
         tabclass[index].innerText = value2
         event1.stopImmediatePropagation()

       }

        event.stopImmediatePropagation()

     })

   })

}

let createinputline = () => {

   let line = document.querySelectorAll('.line')

   line.forEach(dynamicline => {
     
     dynamicline.addEventListener('dblclick',function(event){
     
       let value0 = dynamicline.innerText
       let inputfield1 = document.createElement("input")
       inputfield1.style.cssText = " width: 100px;height: 20px;border: 1px solid #2B2D31;border-radius: 2px;"
       inputfield1.value = value0
       dynamicline.innerHTML = ''
       dynamicline.appendChild(inputfield1)
       inputfield1.focus()

       inputfield1.onblur = (event1) => {
    
         let value3 = inputfield1.value
         dynamicline.innerHTML = value3
         event1.stopImmediatePropagation()

       }

       event.stopImmediatePropagation()

     })

   })

}

let isrequired = (constinput) => {

  let value =  constinput === '' ? false: true
  return value

}

let isnumber = (constinput) => {

  let value =  /^[-+]?\d+(\.\d+)?$/.test(constinput) ? true : false
  return value

}


let showerror = (input,index,message) => {
  
  let xconstdiv = input.parentElement
  input.classList.remove('success')
  input.classList.add('error')
  let smalltag = xconstdiv.querySelectorAll('small')
  smalltag[index].innerText = message
  smalltag[index].style.cssText += 'color:red;display:block'

}

let showsuccess = (input,index) => {

  let xconstdiv = input.parentElement
  input.classList.remove('error')
  input.classList.add('success')
  let smalltag = xconstdiv.querySelectorAll('small')
  smalltag[index].innerText = ''

}

let checkinputfields =(index) => {

   let xconstdiv = document.getElementsByClassName('constant_of_x')
   let inputcollectionclass = xconstdiv[index].getElementsByClassName('constant_input')
   let inputcollection = Array.from(inputcollectionclass)
   let test_array = []

   inputcollection.forEach((input,index) => {
    
     let valid = false 
     let constinput = input.value.trim()
     
     if (!isrequired(constinput)) {
       
      showerror(input,index,'.field cannot be empty,input 0 if this X power is not part of your equation')
     
     }

     else if (!isnumber(constinput)) {

     showerror(input,index,'.value can only be a number')
  
     }

     else {

       showsuccess(input,index)
       valid = true

     }

     test_array.push(valid)

   })
 
   let validity = test_array.every(testforvalidity => testforvalidity === true)
   return validity

}

let checkinputforscale  =(tabindex) => {

   let scale = document.getElementsByClassName('scales')
   let scaleparaclass = scale[tabindex].getElementsByTagName('p')
   let paraclass = Array.from(scaleparaclass)
   let test_array = []
   
   paraclass.forEach(para => {
      
     let scaleinputclass = para.getElementsByTagName('input')
     let scales = Array.from(scaleinputclass)
      
     scales.forEach((input,index) => {
    
       let valid = false 
       let scaleinput = input.value.trim()

       if (!isrequired(scaleinput)) {

         showerror(input,index,'.field cannot be empty. try e.g 1cm | 1unit or 1cm | 10unit')

       }

       else if (!isnumber(scaleinput)) {
  
         showerror(input,index,'.value can only be a number')

       }

       else {

         showsuccess(input,index)
         valid = true

       }

       test_array.push(valid)

     })

   })

   let validity = test_array.every(testforvalidity => testforvalidity === true)
   return validity

}



if (!CSS.supports('selector(:has(*))')) {
  document.querySelectorAll('tool-tip').forEach(tooltip =>
    tooltip.parentNode.classList.add('has_tool-tip'))

  let styles = document.createElement('style')
  styles.textContent = `
    .has_tool-tip {
      position: relative;
    }
    .has_tool-tip:is(:hover, :focus-visible, :active) > tool-tip {
      opacity: 1;
      transition-delay: 200ms;
    }
  `
  document.head.appendChild(styles)
}

