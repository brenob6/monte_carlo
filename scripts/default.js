function createHeader() {
    let header = document.getElementsByTagName("header");
    header.item(0).innerHTML = 
       ` <nav>
				<span class="logo">Math Labs</span>
				<span class="icon">
					<a href="https://www.geeksforgeeks.org/estimating-value-pi-using-monte-carlo/" 
            target="_blank">i</a>
				</span>	
				<span class="icon">?</span>
			</nav>
`; 
}

window.addEventListener("load", () =>{
   createHeader(); 
})
