//Storing a string
buf = new Buffer(256);
len = buf.write("I am learning nodejs!");
console.log("Octets written : "+  len);

//Formatting the buffer
buf = new Buffer(26)
for(var i=0; i<26; i++) {
    buf[i] = i+97;
}
console.log('ASCII output: '+buf.toString('ascii'));
console.log('ASCII sliced output: '+buf.toString('ascii',0,5));
console.log('utf-8 sliced output: '+buf.toString('utf-8',0,5));
console.log('undifined sliced output: '+buf.toString(undefined,0,5));

//Converting buffer to json
buf = new Buffer('{"name":"John","age":30,"}');
json = buf.toJSON();
console.log('Json :'+json);

//Concatenation
Buffer1 = new Buffer("I am learning ");
console.log('Buffer1: '+Buffer1);
Buffer2 = new Buffer("nodejs");
console.log('Buffer2: '+Buffer2);
Buffer3 = Buffer.concat([Buffer1,Buffer2]);
console.log('Concatenated String :'+Buffer3.toString());

//Compare
console.log('Compared Result: '+Buffer1.compare(Buffer2));//Return 0 if same, else -1

//copy
Buffer3 = new Buffer(20);
Buffer1.copy(Buffer3);
console.log('Copied String: '+Buffer3.toString());

//Slice
Buffer3 = Buffer1.slice(0,4);
console.log('Sliced part: '+Buffer3.toString());

//Length
console.log('Buffer1 length: '+Buffer1.length);
