# Lapor Hama Tealinux OS
Open Source Project

### Prerequisites
- npm : minimal v. 3.1


### How to install

1. clone this project ```$ git clone ```
2. enter the project folder ```$ cd laporHama```
3. create personal access tokens | [here](https://github.com/settings/tokens)
4. duplicate _.env.example_ to _.env_ : ```$ cp .env.example .env```
5. setup environment variable
6. install dependencies ```$ npm install```

### Run project
```$ npm start```

### Build Linux
- linux amd64 architecture
```$ npm run build-linux64```

- linux i386 architecture
```$ npm run build-linux32```

### Build Deb
- linux amd64 architecture
```$ npm run deb64```

- linux i386 architecture
```$ npm run deb32```
