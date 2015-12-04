function nothing () {
    alert("This button still doesn't do much.");
}

function ping () {
    if(confirm("Ping")) {
        if(confirm("Pong")) {
            ping();
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}