let numberofcheckbox=3;
function checkOnlyone(id)
{
    let checkbox=document.getElementById(id)
    if(checkbox.checked==true)
    {
        for(let i=1;i<=numberofcheckbox;i++)
        {
            let ids="checkbox"+i;
            let checkboxs=document.getElementById(ids);
            if(checkbox==checkboxs)
            {
                continue;
            }
            else
            {
                checkboxs.checked=false;
            }
        }
    }
}
class password
{
    constructor(len)
    {
        this.len=len;
        this.password="";
    }
    weakPassword()
    {
        if(this.len<4)
        {
            return 0;
        }
        this.password="";
        let a="abcdefghijklmnopqrstuvwxyz"
        while(this.len--)
        {
            let index=Math.floor(Math.random()*(a.length));
            this.password+=a[index]
        }
        return this.password;
    }
    strongPassword() {
        if (this.len < 4) {
            return 0;
        }
        this.password = "";
        let a = "abcdefghijklmnopqrstuvwxyz";
        let n = "0123456789";
    
        // Generate random letters and digits until the desired length
        while (this.len>0) {
            if (this.len >= 2) { // If len >= 2, add a random letter and a random digit
                this.password += a[Math.floor(Math.random() * a.length)];
                this.password += n[Math.floor(Math.random() * n.length)];
                this.len -= 2; // Subtract 2 from len because we added 2 characters
            } else { // If len is 1, add only a random letter
                this.password += a[Math.floor(Math.random() * a.length)];
                this.len -= 1; // Subtract 1 from len because we added 1 character
            }
        }
        return this.password;;
    }

    
    insanePassword()
    {
        if (this.len < 4) 
        {
            return 0;
        }
        this.password="";
        let a="abcdefghijklmnopqrstuvwxyz"
        let n="0123456789"
        let s="`!@#$%^&*()_-+=[]{};'\:|/?.,><~"
        while(this.len>0)
        {
            if(this.len>=3)
            {
                this.password+=a[Math.floor(Math.random()*(a.length))]
                this.password+=n[Math.floor(Math.random()*(n.length))]
                this.password+=s[Math.floor(Math.random()*(s.length))]
                this.len-=3;
            }
            else if(this.len>=2)
            {
                this.password+=a[Math.floor(Math.random()*(a.length))]
                this.password+=n[Math.floor(Math.random()*(n.length))]
                this.len-=2;
            }
            else
            {
                this.password+=a[Math.floor(Math.random()*(a.length))]
                this.len-=1;
            }
        }
        return this.password;
    }
}


let btn=document.querySelector("#btn")
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let checkbox=document.querySelectorAll(".checkbox");
    for(let i of checkbox)
    {
        if(i.checked==true)
        {
            let ch=Number.parseInt(extractDigit(i.id));
            let len=document.getElementById("length").value;
            let pass=new password(len)
            switch(ch)
            {
                case 1:
                    let pw=pass.weakPassword();
                    if(pw==0)
                    {
                        document.getElementById("gpcontainer").innerHTML=`<p id="genpass" style="color: red;">password should contain at least 4 characters</p>`
                        break;
                    }
                    document.getElementById("gpcontainer").innerHTML=`<p id="genpass">${pw}</p><i class="fa-solid fa-copy copy" onclick="${copytext(pw)}"></i>`
                    break;
                case 2:
                    let pww=pass.strongPassword();
                    if(pww==0)
                    {
                        document.getElementById("gpcontainer").innerHTML=`<p id="genpass" style="color: red;">password should contain at least 4 characters</p>`
                        break;
                    }
                    document.getElementById("gpcontainer").innerHTML=`<p id="genpass">${pww}</p><i class="fa-solid fa-copy copy" onclick="${copytext(pww)}"></i>`
                    break;
                case 3:
                    let pwww=pass.insanePassword();
                    if(pwww==0)
                    {
                        document.getElementById("gpcontainer").innerHTML=`<p id="genpass" style="color: red;">password should contain at least 4 characters</p>`
                        break;
                    }
                    document.getElementById("gpcontainer").innerHTML=`<p id="genpass">${pwww}</p><i class="fa-solid fa-copy copy" onclick="${copytext(pwww)}"></i>`
                    break;
            }
        }
    }
})
function extractDigit(s)
{
    let num="";
    for(let i=s.length-1;i>=0;i--)
    {
        if(!isNaN(s[i]))
        {
            num=s[i]+num;
        }
    }
    return num;
}
function copytext(text)
{
    navigator.clipboard.writeText(text);
}