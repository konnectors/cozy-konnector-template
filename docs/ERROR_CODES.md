Error codes for your konnector
==============================

This is the list of error codes that your konnector can use and which will be translated by the
data-connect application. These codes will be passed to the "next" callback in your konnector like
this :

```javascript
if (err && res.statusCode === 422) {
  return next('LOGIN_FAILED')
}
```

|Error code|Meaning|
|---|---|
|'LOGIN_FAILED'|The konnector could not login|
|'NOT_EXISTING_DIRECTORY'|The folder specified as folder_to_save does not exist (checked by base_konnector)|
|'UNKNOWN_ERROR'|There was an unexpected error, please take a look at the logs to know what appened|
