{% with messages = get_flashed_messages() %}
  {% if messages %}
    <ul class=flashes>
    {% for message in messages %}
      <li>{{ message }}</li>
    {% endfor %}
    </ul>
  {% endif %}
{% endwith %}
{% block body %}{% endblock %}


//function to resize on mouse in and out
function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
}

function normalImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}

//function to check all fields are completed on validation

function validateForm()
    {
    var a=document.forms["regForm"]["username"].value;
    var b=document.forms["regForm"]["password"].value;
    var c=document.forms["regForm"]["name"].value;
    var d=document.forms["regForm"]["surname"].value;
    if (a==null || a=="",b==null || b=="",c==null || c=="",d==null || d=="")
      {
      alert("Please fill out all fields.");
      return false;
      }
    }
