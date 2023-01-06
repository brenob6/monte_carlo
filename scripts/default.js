function createHeader() {
    let header = document.getElementsByTagName("header");
    header.item(0).innerHTML = 
       ` <nav>
<span class="logo"><a href="../index.html">Math Labs</a></span>
				<span class="icon">
					<a href="#" 
            target="_blank">i</a>
				</span>	
				<span class="icon">?</span>
			</nav>
`; 
}

window.addEventListener("load", () =>{
   createHeader(); 
})
