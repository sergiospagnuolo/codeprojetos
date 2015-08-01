<head><script src="sheetsee.js" type="text/javascript"></script>
        <script src="tabletop1.3.4.js" type="text/javascript"></script>
        <script src= "jquery-1.11.3.min.js" type="text/javascript"></script>
        <script src="highlight.js" type="text/javascript"></script>
</head>
<!--Tabela com todos os dados pesquisáveis-->
              
  <div class="container" style="">
    <h1>Quanto seu banco cobra de juros?</h1>
    <p>
    <input id="fullTableFilter" type="text" placeholder="Digite aqui o nome do seu banco cobra - Ex: Bradesco, Itaú (utilize acentos)"/>
    <div id="fullTable"></div> 

</div>

<script id="fullTable_template" type="text/html">
  <table>
    <th class="tHeader"></th><th class="tHeader">Cartão Rotativo <br>- ao mês (%)</th><th class="tHeader">Cartão Rotativo <br>- ao ano (%)</th> <th class="tHeader">Cheque Especial <br> - ao mês (%)</th><th class="tHeader">Cheque Especial <br> - ao ano (%)</th>
      {{#rows}}
        <tr style="text-align:center; border-right: 1px"><td>{{banco}}</td><td>{{cart1}}</td><td>{{cart2}}</td><td>{{chq1}}</td><td>{{chq2}}</td></tr>
      {{/rows}}
  </table>
</script>

<script type="text/javascript">
  document.addEventListener('DOMContentLoaded', function() {
    var URL = "https://docs.google.com/spreadsheets/d/1C0uC3hy4DsY56wHaUhlTdW0hy4rTm-1ZKcAj80iG-S4/pubhtml"
    Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } )
  })

  function showInfo(data) {
    var tableOptions = {"data": data
    , "pagination": 5, "tableDiv": "#fullTable", "filterDiv": "#fullTableFilter"}
    Sheetsee.makeTable(tableOptions)
    Sheetsee.initiateTableFilter(tableOptions)

    var html = Sheetsee.ich.photogrid({'rows': data})
    $('#photogrid').html(html)
  }

    
</script>
