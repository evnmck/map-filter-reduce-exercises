# Encryption Function

### Step One

As a group, build an ecryption function. Each team member needs to create a function that takes a string and returns an altered version. Chain each member's functions and wrap them into one function.

#### Example:

```js
function encrypt(string) {
	var encryptedString = robertosCrypter(string);
	var superEncryptedString = dannysCrypter(encryptedString);
	return superEncryptedString;
}
```

### Step Two

After building an awesome encrypter, build a decrypter for your function. Each member should have a decrypting function that undo's the encryption of their function. When chained together in the same order, it should return the same string that was encrypted.

#### Example:

```js
var encryptedString = encrypt(inputString);
var decryptedString = decrypt(encryptedString);
inputString === decryptedString // true
```


 
