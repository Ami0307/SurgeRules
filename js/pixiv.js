body = $response.body.replace(/\"is_premium\":false/, "\"is_premium\":true")
$done({body});
