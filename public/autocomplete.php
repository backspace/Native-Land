<?php
if(isset($_GET['input'])) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://maps.googleapis.com/maps/api/place/queryautocomplete/xml?key=AIzaSyBCGhRUIH9fituW5cgNRM0JCvepmZbFlUg&input=' . $_GET['input']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $str = curl_exec($ch);
    curl_close($ch);

    if(!empty($str))
    {
        $xml = simplexml_load_string($str);
        echo json_encode($xml);
    }
}

if(isset($_GET['placeid'])) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://maps.googleapis.com/maps/api/place/details/xml?key=AIzaSyBCGhRUIH9fituW5cgNRM0JCvepmZbFlUg&placeid=' . $_GET['placeid']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $str = curl_exec($ch);
    curl_close($ch);

    if(!empty($str))
    {
        $xml = simplexml_load_string($str);
        echo json_encode($xml);
    }
}
 ?>
