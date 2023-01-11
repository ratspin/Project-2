<?php
 
$curl = curl_init();
$img_file = "/food/-ข้าวหมูแดง";
$img_data = file_get_contents($img_file);
$data = json_encode(array("file" => base64_encode($img_data)));
	
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.aiforthai.in.th/thaifood",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $data,
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "apikey: zEcGHT26R8S7j7vEkgB4pGe1xgHGuQkt"
  )
));
 
$response = curl_exec($curl);
$err = curl_error($curl);
 
curl_close($curl);
 
if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
?>