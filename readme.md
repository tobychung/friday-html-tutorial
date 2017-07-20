## 教學大綱

* HTML專案建置
* css基礎 ＆ sass 初探
* animate.css初探
* Boostrap初探
* jQuery基本應用
* gulp 自動化處理工具
* 基本git應用


### Step1：環境建置

1. 安裝 NodeJS : [https://nodejs.org/en/](https://nodejs.org/en/)
	
	>	厲害的Web Server	
	
2. 安裝Git : [https://git-scm.com/](https://git-scm.com/)
	
    > Windows同學 👉 [https://git-scm.com/download/win](https://git-scm.com/download/win)

	>	工程師必備協作工具

3. 下載VScode : [https://code.visualstudio.com/](https://code.visualstudio.com/)	
	
	>	寫code的編輯器

4. 安裝NVM	

	> Windows同學 👉 [https://goo.gl/2v2KoJ](https://goo.gl/2v2KoJ)

	```
	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
	```


5. 安裝NodeJS

	```
	nvm install 6.6
	```	

5. 檢查Node 和 npm 是否裝好

	```
	node -v
	```	

	```
	npm -v
	```
	
### Step2：clone專案	
1. 打開 vscode 或是 終端機

	> vscode開終端機方式：cmd + shift + Y

2. 依序輸入下方指令下載專案

 	> Windows同學 👉 cd c:\Users\你的使用者名稱\Desktop

	```
	cd ~/Desktop
	```

	```
	git clone https://tobychung@bitbucket.org/tobychung/friday-html-tutorial.git
	```	


3. 打開桌面上的資料夾安裝所有套件 (Mac同學才執行sudo npm install)  

	```
	cd ~/Desktop/friday-html-tutorial
	```
	
	```
	npm install
	```

4. 安裝全域gulp並執行專案
  
	> 當遇到Node Sass does not yet support your current environment....
	
	> 解法 👉  npm rebuild node-sass

	```
	npm install gulp -g
	```

	```
	gulp server
	```


5. 打開網頁 🎉🎉🎉

	[http://localhost:8080](http://localhost:8080)