#!/usr/bin/php-cgi
<head><title>Test</title></head>
<body>
    <h1>Testing IFrame</h1>

    <?php
        $a = array('Testing.html', 'Testing2.html');
        $first = $a[0];
        for($i=0; $i<count($a); $i++){
            ?>
            <a href="javascript:loadintoIframe('target', '<?php echo $a[$i] ?>');">Testing <?php echo $i + 1 ?></a>   
            <?php
        }
    ?>

    <br>
    <iframe id="target" src="<?php echo $first ?>" name="target" width="400" height="400px">noframes</iframe>
    <br>
    <a href = '<?php echo $first ?>' id="openPageID">Open Page</a>
    <br>
    <button onclick="getCurrURL()">Try it</button>

    <script type="text/javascript">
        function loadintoIframe(iframeid, url){
            if (document.getElementById)
                document.getElementById(iframeid).src=url
                document.getElementById("openPageID").href = url;
            if (window.attachEvent) window.attachEvent("onload", loadintoIframe);
        }


        function getCurrURL() {
            var x = document.getElementById("target").src;
            document.getElementById("openPageID").href = x;

            return x;
        }
    </script>
</body>
</html>