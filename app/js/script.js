function getData () {
  var data = document.getElementById('GH').checked
  // var parent = document.getElementById('data_gh')
  console.log(data)
  var dataAll = document.getElementsByClassName('box-project__data')
  // debugger

  // if  (data === true) {
    for (var i = 0; i < dataAll.length; i++) {
      var dataID = dataAll[i].children[0].id
      switch (dataID) {
        // case "data_gh":
        //   document.getElementById('data_gh').style.border = '4px solid #FA2E87'
        //   break
        // case "data_cp":
        //   document.getElementById('data_cp').style.border = '4px solid #2DD6A3'
        //   break
        // case "data_ec":
        //   document.getElementById('data_ec').style.border = '4px solid #BE68D4'
        //   break
        // case "data_ta":
        //   document.getElementById('data_ta').style.border = '4px solid #7541F0'
        //   break
        // case "data_lp":
        //   document.getElementById('data_lp').style.border = '4px solid #F8BF72'
        //   break
        case dataID:
          document.getElementById(dataID).style.border = '4px solid #F8BF72'
          break
      }
    }
  // }
}