const data = {
    "type": "service_account",
    "project_id": "ikomida-prod",
    "private_key_id": "97b2ddf92aa535211198287cdda63a0572e9a0a7",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDX9r3rZHUu2Dt4\niVdJwYti1uVRY5d0h1cYPac9wDFdTxi0Q4j32IzhFCKRGsOQswfLzwQsFS6s8hqf\nafFnQYqHXo0ThG+24WkpZXSObId6v+fw9UAj0AizfLJXHZU6MxMuBHrtzKA02lMF\nLMxHuxP7F0JI8HAvrygOdpyUPdl+nsA4Sys5FyuQTM6/EFhW1ox0hlCjMNfN6x4j\n1mK4cuy2lrQatWAAxJMEaSp64NKkQ1OUIT3ANBdVtSlIRToW8wcAtJBprRMjp7rD\nthI1bvqwMZc2S3F2U8x6o42UJjhXQDups1KWjEu7Dhx9Xn2AezZlpuvAWZzRZGyD\n86k7ahTjAgMBAAECggEAQvvF5kfPTMtGjtlSWI8OU4bBs5/HLx53Ng6RW8bLyNwq\nlmbICc+ByqH7IrSBadUNmvpHmgCr7HpfJYivlk4u0FPUP/R4zelWO7+7Ch3BW6JA\nJ216CmGRAVKw4fJMAbQrw78h/bXVDu+UhmthpPHyfZO2PHdO5ItYSjwhzpzsY6f5\nooCzZERNRZoG76I1P3iq0S5jinW+yuDww13WnGUsu+kZG0KMUraIEbSpF9aMZJaf\nukQXQ4WGXZ5PFRNjwxqyLjEkYQClof/9hYtu3cxeXaPaoMt7kZeAg+QsX6/X4C04\nRLu8nPM8Ld/m7lGXEwk6NBYuv+18p3Xnu5R8Vx8AMQKBgQDwtmk+8oBy6kjeuaDT\n+3TUhC+JFB91x3vMH1cSMqW7Mbysql4bf9n7UfnRwBY97AXedqam2NPaU+zY/sg9\nI62/uRovnDHcSF3e6FEAX+6ZxYXkOwNPSB4GgVX/7XFf+L7f2N7RiIR0veLmw21C\ndvnyTV4HJx7pa/YpB7OzzoquiwKBgQDlrfUkklvP3FE7uoL2uleaEUuMke+NUNTb\nwVaMOnDz5R98OCNI0e+blemptA7ZvwP2JJjIjfkhxtijquw4miydmdnYW0PknyTW\nlgCALjLcIxoe55vA8MzmqcM6qG3YYapL4oMaqzgmKqUfgfFDcSz4g4f3WYm74qJT\nPARqM94WCQKBgQCeQV8aana2ln+IJwSsucKKwck610cDuT4T6nrlVPUPCFkiL/Ql\nIj5e8/tJwn8dAOKu6tUQFrfZ75lk5MUjJSTjSsADky5YxB8rIRO4KloFMQ6hCYdY\nhXJwFnJDC4mhbjmXk86Sda2XzwuxacSYkP4tJl5uV3MERd2WBiFIUr9slwKBgQCP\nBLCWklB7cZxfzfcI/eXYuRZLNQBvBbtWD+D9ttJo/O6LIkXObXN/dW0n0EhDDK/B\n0O4WTFmqz7BM0f0ADfjkNk4xbDstnG+K86LiLmJbM7xrLBuPnCJrK6C24PRtfftV\n/3lV3PI8yedCZF7AeTPgl77NpkKe7TPZEpFJNH0BSQKBgGuBIzuJ6Umh+T9Jc6cq\n6uG1Nf9GQP5qLz08XdiMg1BJNFgcZW/JFeUjnHhMl01kGFblTogysASb80+3ACRe\nDARaHAQw2wltDV6TMNsaCttw/0yHazN03jMknV8HzW5tRfwnLjTxLaJO2MArKAiU\nqhEuybZKl7Q1KRUJ+Lj4uoan\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-atof3@ikomida-prod.iam.gserviceaccount.com",
    "client_id": "103986503168125362781",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-atof3%40ikomida-prod.iam.gserviceaccount.com"
}
console.log(Buffer.from(JSON.stringify(data)).toString('base64'))