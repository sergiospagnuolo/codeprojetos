<head>
<script src="Chart.js" type="text/javascript"></script>
</head>

 <!--Gráfico Cheque Especial-->
           
           <div class="grafico" id="graph1">
            <div class="grafico1">
               <h1>Juros cheque especial
		      </h1>
            <canvas id="especial" width="300" height="300"></canvas>
               </div>
               <!--Gráfico Cartão-->
             <div class="grafico2">
            <h1>Juros cartão - % ao ano
		      </h1>
            <canvas id="cartao" width="300" height="300"></canvas>
                 </div>
	   <script>
		var jurosespecial = 
            
            [
				{
					value: 195.03,
					color:"#F7464A",
					highlight: "#ededed",
					label: "Bradesco"
				},
				{
					value: 197.45,
					color: "#336699",
					highlight: "#ededed",
					label: "Caixa"
				},
				{
					value: 215.59,
					color: "#cdaf35",
					highlight: "#ededed",
					label: "Banco do Brasil"
				},
				{
					value: 247.26,
					color: "#cc8b2f",
					highlight: "#ededed",
					label: "Itaú"
				},
                {
					value: 305.93,
					color: "#443266",
					highlight: "#ededed",
					label: "Citibank"
				},
				{
					value: 348.56,
					color: "#FD2A19",
					highlight: "#ededed",
					label: "HSBC"
				},
                {
					value: 369.02,
					color: "#A6002E",
					highlight: "#ededed",
					label: "Santander"
				}
                
			];
           
           var juroscartao = 
            
            [			
				{
					value: 134.54,
					color: "#336699",
					highlight: "#ededed",
					label: "Caixa"
				},
				{
					value: 268.9,
					color: "#cdaf35",
					highlight: "#ededed",
					label: "Banco do Brasil"
				},
				{
					value: 430.06,
					color: "#443266",
					highlight: "#ededed",
					label: "Citibank"
				},
                {
					value: 433.08,
					color:"#F7464A",
					highlight: "#ededed",
					label: "Bradesco"
				},
				{
					value: 440.48,
					color: "#FD2A19",
					highlight: "#ededed",
					label: "HSBC"
				},
                {
					value: 495.57,
					color: "#A6002E",
					highlight: "#ededed",
					label: "Santander"
				},
                {
					value: 631.85,
					color: "#cc8b2f",
					highlight: "#ededed",
					label: "Itaú"
				}
                
			];
			window.onload = function(){
        var ctx1 = document.getElementById("especial").getContext("2d");
        var myPolarArea = new Chart(ctx1).PolarArea(jurosespecial, 
                {
					responsive:true,
                    animateScale: true,
                    segmentStrokeWidth : 5,
                    animationEasing : "southOutBounce",
                    showScale: true,
                    scaleLineWidth: 1,
                    scaleBeginAtZero: true,
                    scaleFontFamily: "'Monaco', 'Arvo', sans-serif",
                    scaleFontSize: 16,
                    tooltipFontFamily: "'Monaco', 'Arvo', sans-serif"
				});
        var ctx2 = document.getElementById("cartao").getContext("2d");
        var myPolarArea2 = new Chart(ctx2).PolarArea(juroscartao,
                {
					responsive:true,
                    animateScale: true,
                    segmentStrokeWidth : 5,
                    animationEasing : "southOutBounce",
                    showScale: true,
                    scaleLineWidth: 1,
                    scaleBeginAtZero: true,
                    scaleFontFamily: "'Monaco', 'Arvo', sans-serif",
                    scaleFontSize: 16,
                    tooltipFontFamily: "'Monaco', 'Arvo', sans-serif"
				});
                
                
};
	       </script>
           </div>
		
           <!--Mapa sobre juros no mundo-->
