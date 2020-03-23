<?php

$subdirs = scandir("scss");

foreach($subdirs as $subdir){
    if(!is_dir("scss/{$subdir}") || in_array($subdir, [".", ".."])){
        continue;
    }
    $files = scandir("scss/{$subdir}");
    foreach($files as $file){
        if(substr($file, -5) === ".scss"){
            $input = "scss/{$subdir}/{$file}";
            $output = str_replace("scss", "css", $input);
            echo "{$input} > {$output}<br>";
            exec("sass {$input} {$output}\n");
        }
    }
}