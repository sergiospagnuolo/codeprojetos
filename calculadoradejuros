 <!--Calculadora de Juros-->
           
<div id="calculadora" class="container">
    <h1>Calculadora de Juros</h1>
           <form name="loandata">
  <table style="margin:0 auto;">
    <tr><td colspan="3"><strong></strong></td></tr>
    <tr>
      <td>Empréstimo ($):</td>
      <td><input type="text" name="principal" size="12" 
                 onchange="calculate();"></td>
    </tr>
    <tr>
      <td>Taxa de juros (mensal)</td>
      <td>
          <input type="text" name="interest" size="12" 
                 onchange="calculate();"></td>
    </tr>
    <tr>
      <td>Prazo (em meses):</td>
      <td><input type="text" name="years" size="12" 
                 onchange="calculate();"></td>
    </tr>
    <tr><td colspan="3">
      <input type="button" value="Calcular" onclick="calculate();">
    </td></tr>
    <tr><td colspan="3">
    </td></tr>
    <tr>
      <td><strong>Pagamento mensal:</strong></td>
      <td><input type="text" name="payment" size="12"></td>
    </tr>
    <tr>
      <td>Pagamento total:</td>
      <td><input type="text" name="total" size="12"></td>
    </tr>
    <tr>
      <td>Juros pagos:</td>
      <td><input type="text" name="totalinterest" size="12"></td>
    </tr>
  </table>
</form>
<script language="JavaScript">
function calculate() {
    var principal = document.loandata.principal.value;
    var interest = document.loandata.interest.value / 100 / 1;
    var payments = document.loandata.years.value * 1;

    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);

    if (!isNaN(monthly) && 
        (monthly != Number.POSITIVE_INFINITY) &&
        (monthly != Number.NEGATIVE_INFINITY)) {

        document.loandata.payment.value = round(monthly);
        document.loandata.total.value = round(monthly * payments);
        document.loandata.totalinterest.value = 
            round((monthly * payments) - principal);
    }
    // Otherwise, the user's input was probably invalid, so don't
    // display anything.
    else {
        document.loandata.payment.value = "";
        document.loandata.total.value = "";
        document.loandata.totalinterest.value = "";
    }
}

function round(x) {
  return Math.round(x*100)/100;
}
</script>
            </div>
