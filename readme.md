
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    table.blueTable {
        font-family: Arial, Helvetica, sans-serif;
        border: 2px solid #6E656C;
        background-color: #FFFFFF;
        width: 250px;
        height: 100%;
        text-align: center;
        border-collapse: collapse;
    }
    table.blueTable td, table.blueTable th {
        border: 1px solid #AAAAAA;
        padding: 3px 2px;
    }
    table.blueTable option{
        border: 10px solid #AAAAAA;
        padding: 30px 2px;
    }
    table.blueTable tbody td {
        font-size: 13px;
        color: #000000;
    }
    table.blueTable thead {
        background: #6E656E;
        background: -moz-linear-gradient(top, #928b92 0%, #7c747c 66%, #6E656E 100%);
        background: -webkit-linear-gradient(top, #928b92 0%, #7c747c 66%, #6E656E 100%);
        background: linear-gradient(to bottom, #928b92 0%, #7c747c 66%, #6E656E 100%);
        border-bottom: 2px solid #444444;
    }
    table.blueTable thead th {
        font-size: 19px;
        font-weight: bold;
        color: #FFFFFF;
        text-align: center;
        border-left: 2px solid #FFFFFF;
    }
    table.blueTable thead th:first-child {
        border-left: none;
    }

    table.blueTable tfoot {
        font-size: 14px;
        font-weight: bold;
        color: #FFFFFF;
        background: #6E656E;
        background: -moz-linear-gradient(top, #928b92 0%, #7c747c 66%, #6E656E 100%);
        background: -webkit-linear-gradient(top, #928b92 0%, #7c747c 66%, #6E656E 100%);
        background: linear-gradient(to bottom, #928b92 0%, #7c747c 66%, #6E656E 100%);
        border-top: 2px solid #444444;
    }
    table.blueTable tfoot td {
        font-size: 14px;
    }
</style>
<body>
<table class="blueTable">
    <thead>
    <tr>
        <th>Regional Rail Fares</th>
    </tr>
    </thead>
    <tfoot>
    <tr>
        <td>Your fare will cost</td>
    </tr>
    </tfoot>
    <tbody>
    <tr>
        <td>Where are you going? <br> <select>
            <option value="to">Toronto</option>
            <option value="ex1">newmarket</option>
            <option value="ex2">burlington</option>
            <option value="ex3">kitchener</option>
        </select></td></tr>
    <tr>
        <td>When are you riding <br> <select>
            <option value="weekdays">Weekdays</option>
            <option value="weekend">Weekend</option>
        </select></td></tr>
    <tr>
        <td>Where will you purchase the fare? <br> <input type="radio" name="ticket" value="Kisok"> Station Kisok<br>
            <input type="radio" name="ticket" value="Onboard"> Onboard<br> </td></tr>
    <tr>
        <td>How many rides will you need? <br> <input id="number" type="number"><form action="">
            </td></tr>
    </tbody>
    </tr>
</table>
</body>
</html>