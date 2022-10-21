#!/usr/bin/env bash

_cleanup() {
    image_path="$location-docker.pkg.dev/$project_id/$repository_id/$image_name"
    echo "Starting to filter: $image_path"
    digests=$(gcloud artifacts docker images list $image_path \
        --include-tags \
        --filter="(NOT tags:cache AND NOT tags:latest)" \
    --format='value(DIGEST)' --sort-by="UPDATE_TIME")
    if [ -z "$digests" ]; then
        echo "No images to clean"
    else
        echo "Images found: $digests"
        for digest in $digests; do
            image="$image_path@$digest"
            echo "Deleting image: $image"
            # gcloud artifacts docker images delete "$image_path:$tag" --quiet
            gcloud artifacts docker images delete "$image" --delete-tags --async --quiet
        done
    fi
}
location=$1
project_id=$2
repository_id=$3
image_name=$4 #In this case I just want to clean the old branchs for same image
_cleanup

echo
echo "DONE"