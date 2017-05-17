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
|'UNKNOWN_ERROR'|There was an unexpected error, please take a look at the logs to know what appened|
